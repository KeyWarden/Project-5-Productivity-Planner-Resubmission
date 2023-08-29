from django.contrib import admin
from .models import Task, TaskGroup

"""registers the Task and TaskGroup Models with the admin site"""
admin.site.register(Task)
admin.site.register(TaskGroup)
