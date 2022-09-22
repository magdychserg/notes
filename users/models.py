from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _

from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models her

class User(AbstractUser):

    email = models.EmailField(_('email address'), unique=True)
