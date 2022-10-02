from rest_framework.relations import StringRelatedField
from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer

from todo.models import Project, Todo


class ProjectModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class TodoModelSerializer(ModelSerializer):


    class Meta:
        model = Todo
        fields = '__all__'

