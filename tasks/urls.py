from django.contrib import admin
from django.urls import path, include
from tasks import views

"""This code assigns all tasks urls"""
urlpatterns = [
    path('tasks/', views.TaskList.as_view()),
    path('api-auth/', include('rest_framework.urls')),
    path('tasks/<int:pk>/', views.TaskDetail.as_view()),
    path('groups/', views.GroupList.as_view()),
    path('groups/<int:pk>/', views.GroupDetail.as_view()),
]
