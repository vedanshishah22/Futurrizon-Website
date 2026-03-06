from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    contact_form, NewsletterAPIView, APIRootView,
    admin_login, admin_logout,
    BlogViewSet, JobViewSet, TeamMemberViewSet
)

router = DefaultRouter()
router.register(r'blogs', BlogViewSet)
router.register(r'jobs', JobViewSet)
router.register(r'team', TeamMemberViewSet)

urlpatterns = [
    path('', APIRootView.as_view(), name='api-root'),
    path('', include(router.urls)),
    path('auth/login/', admin_login, name='admin-login'),
    path('auth/logout/', admin_logout, name='admin-logout'),
    path('contact/', contact_form, name='contact'),
    path('newsletter/', NewsletterAPIView.as_view(), name='newsletter'),
]
