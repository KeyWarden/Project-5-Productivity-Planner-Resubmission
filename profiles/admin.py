from django.contrib import admin
from .models import Profile

"""registers the Profile Model with the admin site"""
admin.site.register(Profile)
