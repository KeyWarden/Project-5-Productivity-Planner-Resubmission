from django.http import Http404
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer
from .models import TaskGroup
from .serializers import GroupSerializer
from pro_plan.permissions import IsOwnerOrReadOnly


class TaskList(APIView):
    """Lists current user's Tasks"""
    serializer_class = TaskSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    def get(self, request):
        if request.user.is_authenticated:
            tasks = Task.objects.filter(owner=request.user)
            serializer = TaskSerializer(
                tasks, many=True, context={'request': request}
            )
            return Response(serializer.data)
        else:
            tasks = Task.objects.all()
            serializer = TaskSerializer(
                tasks, many=True, context={'request': request}
            )
            return Response(serializer.data)

    def post(self, request):
        """Manages new Task submission"""
        serializer = TaskSerializer(
            data=request.data, context={'request': request}
        )
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)


class TaskDetail(APIView):
    """Manages specific Task Data retrieval and editing"""
    serializer_class = TaskSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self, pk):
        try:
            task = Task.objects.get(pk=pk)
            self.check_object_permissions(self.request, task)
            return task
        except Task.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        task = self.get_object(pk)
        serializer = TaskSerializer(
            task, context={'request': request}
        )
        return Response(serializer.data)

    def put(self, request, pk):
        task = self.get_object(pk)
        serializer = TaskSerializer(
            task, data=request.data, context={'request': request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)


class GroupList(APIView):
    """List current user's Groups"""
    serializer_class = GroupSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    def get(self, request):
        if request.user.is_authenticated:
            groups = TaskGroup.objects.filter(owner=request.user)
            serializer = GroupSerializer(
                groups, many=True, context={'request': request}
            )
            return Response(serializer.data)
        groups = TaskGroup.objects.all()
        serializer = GroupSerializer(
            groups, many=True, context={'request': request}
        )
        return Response(serializer.data)

    def post(self, request):
        """Manages new Group submission"""
        serializer = GroupSerializer(
            data=request.data, context={'request': request}
        )
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)


class GroupDetail(APIView):
    """Manages specific Group Data retrieval and editing"""
    serializer_class = GroupSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self, pk):
        try:
            group = TaskGroup.objects.get(pk=pk)
            self.check_object_permissions(self.request, group)
            return group
        except TaskGroup.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        group = self.get_object(pk)
        serializer = GroupSerializer(
            group, context={'request': request}
        )
        return Response(serializer.data)

    def put(self, request, pk):
        group = self.get_object(pk)
        serializer = GroupSerializer(
            group, data=request.data, context={'request': request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)
