from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import LeadSerializer, NewsletterSubscriberSerializer

from django.core.mail import EmailMessage
from django.conf import settings

from rest_framework.decorators import api_view

@api_view(['POST'])
def contact_form(request):
    name = request.data.get("name")
    email = request.data.get("email")
    company = request.data.get("company")
    message = request.data.get("message")

    email_message = f"""
Subject: Action Required: New Contact Form Submission

Hello Team,

You have received a new inquiry from the Futurrizon website. Below are the details submitted by the prospect:

--------------------------------------------------
CONTACT DETAILS
--------------------------------------------------
👤 Name:          {name}
📧 Email:         {email}
🏢 Company Name:  {company}

--------------------------------------------------
MESSAGE
--------------------------------------------------
{message}

--------------------------------------------------
Please respond to this inquiry as soon as possible. 

Best regards,
Futurrizon Technologies Pvt. Ltd. Automated System
"""
    msg = EmailMessage(
        subject="Action Required: New Contact Form Submission",
        body=email_message,
        from_email=settings.EMAIL_HOST_USER,
        to=["shared.user@futurrizontech.onmicrosoft.com"],
        reply_to=[email]
    )
    msg.send(fail_silently=False)

    return Response({"message": "Email sent successfully"})

class NewsletterAPIView(APIView):
    def post(self, request):
        serializer = NewsletterSubscriberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Subscribed successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class APIRootView(APIView):
    def get(self, request):
        return Response({
            "contact": "/api/contact/",
            "newsletter": "/api/newsletter/"
        })
