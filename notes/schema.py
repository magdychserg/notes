import graphene
from graphene import ObjectType
from graphene_django import DjangoObjectType

from todo.models import ToDo, Project
from users.models import User

Query=''

class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'

class TodoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'

class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'

class Query(ObjectType):

    all_users = graphene.List(UserType)
    all_todo= graphene.List(TodoType)
    all_projects = graphene.List(ProjectType)

    def resolve_all_users(root,info):
        return User.objects.all()

    def resolve_all_todo(root,info):
        return ToDo.objects.all()

    def resolve_all_projects(root,info):
        return Project.objects.all()



schema = graphene.Schema(query=Query)
