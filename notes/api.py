import requests
import time

DOMAIN = 'http://127.0.0.1:8000/'


def timeout():
    time.sleep(2)


def get_url(url):
    return f'{DOMAIN}{url}'


timeout()

# не авторизован
response = requests.get(get_url('projects/'))
assert response.status_code == 401

timeout()
# базовая авторизация
response = requests.get(get_url('projects/'), auth=('user', 'Qaz!@#123'))
assert response.status_code == 200

timeout()
# авторизация по токену
TOKEN = '98360b6d676933cfbc8de0fc0c607d4798cd31e8'
# response = requests.get(get_url('/api/projects/'), headers={'Authorization': f'Token {TOKEN}'})
headers = {'Authorization': f'Token {TOKEN}'}
response = requests.get(get_url('projects/'), headers=headers)
assert response.status_code == 200

timeout()

# авторизация по jwt
# Получаем токен
response = requests.post(get_url('token/'), data={'username': 'user', 'password': 'Qaz!@#123'})
result = response.json()
# это наш токен
access = result['access']
print('Первый токен',access,end=f'\n{150*"*"}\n')
# это для рефреша
refresh = result['refresh']
print('refresh',refresh,end=f'\n{150*"*"}\n')
timeout()
# Авторизуемся с ним
headers = {'Authorization': f'Bearer {access}'}
response = requests.get(get_url('projects/'), headers=headers)
assert response.status_code == 200

timeout()
# Рефрешим токен ( ДЛЯ ОБНОВЛЕНИЯ)
response = requests.post(get_url('token/refresh/'), data={'refresh': refresh})
# print(response.status_code)
# print(response.text)
result = response.json()
# это наш токен
access = result['access']
print('Обновленный токен',access,end=f'\n{150*"*"}\n')
print('refresh',refresh,end=f'\n{150*"*"}\n')
timeout()
# Авторизуемся с ним
headers = {'Authorization': f'Bearer {access}'}
response = requests.get(get_url('projects/'), headers=headers)
assert response.status_code == 200