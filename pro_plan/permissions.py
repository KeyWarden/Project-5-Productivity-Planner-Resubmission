from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    """checks if the user is the Owner, makes Read only if not"""
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.owner == request.user
