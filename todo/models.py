from django.db import models

# Create your models here.
from users.models import User


class Project(models.Model):
    name = models.TextField(blank=True, null=True)
    link= models.URLField(max_length=100)
    user = models.ManyToManyField(User)


class Todo(models.Model):
    project = models.ForeignKey(Project,on_delete=models.CASCADE)
    text = models.TextField(blank=True,null=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    created = models.DateTimeField(verbose_name='создан', auto_now_add=True)
    updated = models.DateTimeField(verbose_name='обновлен', auto_now=True)
    active = models.BooleanField(verbose_name='активный', default=True)


