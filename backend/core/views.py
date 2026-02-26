from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import LeadSerializer, NewsletterSubscriberSerializer

class ContactAPIView(APIView):
    def post(self, request):
        serializer = LeadSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Message sent successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
