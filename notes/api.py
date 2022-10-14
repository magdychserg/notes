import requests
import time

DOMAIN = 'http://127.0.0.1:8000'


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
response = requests.get(get_url('projects/'), auth=('admin1', 'Qaz!@#123'))
assert response.status_code == 200

timeout()
# авторизация по токену
TOKEN = '10dc9cc0a17c16d47244f22a8f2db7314911fe28'

headers = {'Authorization': f'Token {TOKEN}'}
response = requests.get(get_url('projects/'), headers=headers)
assert response.status_code == 200

