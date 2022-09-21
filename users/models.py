from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    birthday_year = models.PositiveIntegerField()


    def __str__(self):
        return  f'{self.last_name}-{self.first_name}'