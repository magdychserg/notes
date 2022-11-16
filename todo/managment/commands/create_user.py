from django.contrib.auth.models import User
from django.core.management import BaseCommand



from todo.models import ToDo, Project


class Command(BaseCommand):

    def handle(self, *args, **options):

        User.objects.create_superuser(username='admin', password='1', email='admin@mail.ru')
        data_project = {
            'name': 'Александр',
            'repository': 'https://github.com',

        }
        project = Project.objects.create(**data_project)

        todo = ToDo.objects.create(name='Руслан и Людмила')
        todo.projects.add(project.id)