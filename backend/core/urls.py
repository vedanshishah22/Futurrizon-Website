from django.urls import path
from .views import contact_form, NewsletterAPIView, APIRootView

urlpatterns = [
    path('', APIRootView.as_view(), name='api-root'),
    path('contact/', contact_form, name='contact'),
    path('newsletter/', NewsletterAPIView.as_view(), name='newsletter'),
]
