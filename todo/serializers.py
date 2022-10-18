from rest_framework.relations import StringRelatedField
from rest_framework.serializers import  ModelSerializer

from todo.models import Project, ToDo


class ProjectModelSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class TodoModelSerializer(ModelSerializer):


    class Meta:
        model = ToDo
        fields = '__all__'

