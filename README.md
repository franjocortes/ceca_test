# Ceca Test
This is a basic test project, it consists of a page where you enter the license plate number of a vehicle and it returns the vehicle to which it belongs.

---
## Technologies and tools used
- Python3 (Tested in Windows python 3.9 and linux python 3.10)
- Django 4.0.2
- MySQL 8.0
- Frontend: Django templates (HTML, CSS and JavaScript)
- Bootstrap 5 (CDN)

---
## Installation
1. *Clone or download the project*
```
git clone https://github.com/franjocortes/ceca_test.git
```
2. *Create python virtual environment*
```
python -m venv env
```
You may need to use python3 instead of python. "env" is the name of the folder that will contain the virtual environment.

The folder structure should be more or less like this to follow the guide:
```
project
│   README.md 
|
└───test (Django project)
|
└───env (Python environment)
```

3. *Activate the virtual environment*
- Windows
```
project> cd env\Scripts
Scripts> activate
(env) ~ Scripts> _
```
- Linux
```
project $ source env/bin/activate
(env) project $ _
```

4. *Install the python libraries found in requirements.txt*
- Windows
```
(env) ~ project> cd test
(env) ~ test> pip install -r deploy/requirements.txt
```
- Linux
```
(env) project $ cd test/
(env) test $ pip install -r deploy/requirements.txt
```

5. *Configure the connection to the database*

In settings.py file:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'test',
        'USER': 'root',
        'PASSWORD': '1234',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}
```
The "test" database must be newly created, if you wish you can use another name.

6. *Create database schema*

```
(env) test >  python manage.py makemigrations vehicles
(env) test >  python manage.py migrate
```

7. *Create the super user*
```
(env) test >  python manage.py createsuperuser
```

8. *Load data to vehicle table*

- Via django admin:
```
(env) test >  python manage.py runserver
```
Open the browser and go to http://127.0.0.1:8000/admin

- Or running a script that loads test data

```
(env) test >  python manage.py shell
>>> from deploy.data_generate import *
```

9. *That's it*

Running the django server and accessing http://127.0.0.1:8000/ you can query the vehicles.

```
(env) test >  python manage.py runserver
```

---

### You can contact me at https://franjocortes.github.io/
