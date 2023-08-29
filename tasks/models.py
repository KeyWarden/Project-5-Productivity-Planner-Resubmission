from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User


class Task(models.Model):
    """defines the Task Model"""
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    due_at = models.DateField(null=False, blank=False)
    title = models.CharField(max_length=255, blank=False)
    description = models.TextField(blank=False)

    class Meta:
        ordering = ['due_at']

    def __str__(self):
        return f"{self.owner.username} - {self.title}"


class TaskGroup(models.Model):
    """defines the TaskGroup Model"""
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    task = models.ForeignKey(
        Task, on_delete=models.CASCADE, related_name='task_group'
    )
    description = models.TextField(blank=True)
    group_size = models.IntegerField(null=False, blank=False)

    class Meta:
        ordering = ['task']

    def __str__(self):
        return f"{self.owner.username} - {self.task.title} Group"
