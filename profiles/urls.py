from django.contrib import admin
from django.urls import path, include
from profiles import views

"""This code assigns all profiles urls"""
urlpatterns = [
    path('profiles/', views.ProfileList.as_view()),
    path('api-auth/', include('rest_framework.urls')),
    path('profiles/<int:pk>/', views.ProfileDetail.as_view()),
]
