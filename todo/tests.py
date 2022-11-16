from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient
from mixer.backend.django import mixer
from django.contrib.auth.models import User

from .models import Project
from .views import ProjectViewSet



# Create your tests here.

class TestProjectViewSet(TestCase):


    def setUp(self) -> None:
        self.name = 'admin'
        self.password = 'admin_123456789'

        self.data ={'name': 'Александр', 'repository': 'admin@amail.ru', 'users': 'admin'}
        self.data_put = {'name': 'Николай', 'repository': 'user@amail.ru', 'users': 'user'}
        self.url = 'projects/'
        self.admin = User.objects.create_superuser(self.name,'admin@amail.ru',self.password)

    def test_get_list(self):
        # создаем объект класса APIRequestFactory
        factory = APIRequestFactory()
        # определяем адрес и метод для отправки запроса
        request = factory.get(self.url)
        # указываем как тип запроса будет переда в AuthorModelViewSet
        view = ProjectViewSet.as_view({'get': 'list'})
        # передаем во вью и получаем ответ
        response = view(request)
        # проверяем код ответа
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_guest(self):
        # создаем объект класса APIRequestFactory
        factory = APIRequestFactory()
        # определяем адрес и метод для отправки запроса
        request = factory.post(self.url,self.data,format='json' )
        # указываем как тип запроса будет переда в AuthorModelViewSet
        view = ProjectViewSet.as_view({'post': 'create'})
        # передаем во вью и получаем ответ
        response = view(request)
        # проверяем код ответа
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_admin(self):
        # создаем объект класса APIRequestFactory
        factory = APIRequestFactory()
        # определяем адрес и метод для отправки запроса
        request = factory.post(self.url, self.data, format='json')

        #авторизоваться
        force_authenticate(request,self.admin)
        # указываем как тип запроса будет переда в AuthorModelViewSet
        view = ProjectViewSet.as_view({'post': 'create'})
        # передаем во вью и получаем ответ
        response = view(request)
        # проверяем код ответа
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_detail(self):
        #создаем объект класса APIClient
        client = APIClient()
        #создать автора через ORM для проверки детализации
        project = Project.objects.create(**self.data)
        #сделать запрос
        response = client.get(f'{self.url}{project.id}/')
        # проверяем ответ
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_guest(self):
        #создаем объект класса APIClient
        client = APIClient()
        #создать автора через ORM для проверки обновления
        project = Project.objects.create(**self.data)
        #сделать запрос
        response = client.put(f'{self.url}{project.id}/',self.data_put)
        #проверяем ответ
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_admin(self):
        #создаем объект класса APIClient
        client = APIClient()
        #создать автора через ORM для проверки обновления
        project = Project.objects.create(**self.data)
        #авторизоваться
        client.login(username=self.name,password=self.password)
        #сделать запрос
        response = client.put(f'{self.url}{project.id}/',self.data_put)
        #проверяем ответ
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        #получаем автора
        project_update = Project.objects.get(id=project.id)
        #сделать проверку
        self.assertEqual(project_update.name,'Николай')
        self.assertEqual(project_update.repository,'user@amail.ru')
        self.assertEqual(project_update.users,'user')
        client.logout()

    def tearDown(self) -> None:
        pass


