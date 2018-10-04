from __future__ import unicode_literals
from django.contrib.auth.models import AbstractUser, UserManager

from django.db import models
from mongoengine import *

class CustomUserManager(UserManager):
    pass


class CustomUser(AbstractUser):
    objects = CustomUserManager()

## Code
class codes(Document):
    code_id = StringField(required=True)
    code_content = StringField(required=True)
    lang = StringField(required=True)
    code_input = StringField(required=True)
    compile_status= StringField(required=True)
    run_status_status=StringField(required=True)
    run_status_time=StringField(required=True)
    run_status_memory=StringField(required=True)
    run_status_output=StringField(required=True)
    run_status_stderr=StringField(required=True)
