from django.urls import path
from .views import ContactAPIView, NewsletterAPIView, APIRootView

urlpatterns = [
    path('', APIRootView.as_view(), name='api-root'),
    path('contact/', ContactAPIView.as_view(), name='contact'),
    path('newsletter/', NewsletterAPIView.as_view(), name='newsletter'),
]
