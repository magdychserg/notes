import django_filters
from django_filters import rest_framework as filters

from todo.models import Project, Todo


class ProjectFilter(filters.FilterSet):
   name = filters.CharFilter(lookup_expr='contains')

   class Meta:
       model = Project
       fields = ['name','user']

class ToDoFilter(filters.FilterSet):
    created__gt = django_filters.DateFilter(field_name='created', lookup_expr='gte')
    created__lt = django_filters.DateFilter(field_name='created', lookup_expr='lte')

    class Meta:
       model = Todo
       fields = ['project']