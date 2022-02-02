from django.urls import path
from .views import *

app_name = 'vechicles'

urlpatterns = [
    path('', VehicleIndex.as_view(), name='index'),
]