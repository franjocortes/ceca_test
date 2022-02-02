from django.db import models
from django.forms import model_to_dict


class Vehicle(models.Model):
    car_name = models.CharField(max_length=300)
    car_plate = models.CharField(max_length=10)

    def __str__(self):
        return f'{self.car_plate} - {self.car_name}'

    def to_json(self):
        item = model_to_dict(self)
        return item
