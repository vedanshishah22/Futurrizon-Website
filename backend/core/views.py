from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from .models import Lead, NewsletterSubscriber, Blog, Job, TeamMember
from .serializers import LeadSerializer, NewsletterSubscriberSerializer, BlogSerializer, JobSerializer, TeamMemberSerializer

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

@api_view(['POST'])
@permission_classes([AllowAny])
def admin_login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    user = authenticate(username=username, password=password)
    if user is not None and user.is_staff:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({"token": token.key, "message": "Login successful"})
    return Response({"error": "Invalid credentials or not an admin"}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def admin_logout(request):
    request.user.auth_token.delete()
    return Response({"message": "Logout successful"})

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all().order_by('-publish_date')
    serializer_class = BlogSerializer

    def get_permissions(self):
        if self.request.method in ['GET']:
            return [AllowAny()]
        return [IsAuthenticated(), IsAdminUser()]

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all().order_by('created_at')
    serializer_class = JobSerializer

    def get_permissions(self):
        if self.request.method in ['GET']:
            return [AllowAny()]
        return [IsAuthenticated(), IsAdminUser()]

class TeamMemberViewSet(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all().order_by('created_at')
    serializer_class = TeamMemberSerializer

    def get_permissions(self):
        if self.request.method in ['GET']:
            return [AllowAny()]
        return [IsAuthenticated(), IsAdminUser()]

class APIRootView(APIView):
    def get(self, request):
        return Response({
            "contact": "/api/contact/",
            "newsletter": "/api/newsletter/"
        })
