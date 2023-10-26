"""pro_plan URL Configuration"""
from django.contrib import admin
from django.urls import path, include
# from django.views.generic import TemplateView
from .views import logout_route, root_route

urlpatterns = [
    # path('', TemplateView.as_view(template_name='index.html')),
    path('', root_route),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('dj-rest-auth/logout/', logout_route),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path(
        'dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')
    ),
    path('', include('profiles.urls')),
    path('', include('tasks.urls')),
]

# handler404 = TemplateView.as_view(template_name='index.html')
