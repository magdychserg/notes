from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from todo.filters import ProjectFilter, ToDoFilter
from todo.models import Project, Todo
from todo.serializers import ProjectModelSerializer, TodoModelSerializer

class ProjectLimitOffsetPagination(LimitOffsetPagination):
   default_limit = 10


class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20

class ProjectModelViewSet(ModelViewSet):

    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filterset_class = ProjectFilter
    pagination_class = ProjectLimitOffsetPagination



class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    filterset_class = ToDoFilter
    pagination_class = TodoLimitOffsetPagination

    def destroy(self, request, *args, **kwargs):
        todo = self.get_object()
        todo.active = False
        todo.save()
        return Response(status=status.HTTP_200_OK)