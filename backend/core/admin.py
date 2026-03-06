from django.contrib import admin
from .models import Lead, NewsletterSubscriber, Blog, Job, TeamMember


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'company', 'created_at')
    search_fields = ('name', 'email', 'company')
    ordering = ('-created_at',)


@admin.register(NewsletterSubscriber)
class NewsletterSubscriberAdmin(admin.ModelAdmin):
    list_display = ('email', 'is_active', 'subscribed_at')
    list_filter = ('is_active',)
    ordering = ('-subscribed_at',)


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'publish_date', 'created_at')
    search_fields = ('title', 'author')
    ordering = ('-publish_date',)


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ('title', 'department', 'location', 'employment_type', 'is_active', 'created_at')
    list_filter = ('is_active', 'department', 'employment_type')
    search_fields = ('title', 'department', 'location')
    ordering = ('-created_at',)


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'created_at')
    search_fields = ('name', 'role')
    ordering = ('created_at',)
