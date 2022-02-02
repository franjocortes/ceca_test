from django.db import models


class Vehicle(models.Model):
    name = models.CharField(max_length=300)
    plate = models.CharField(max_length=10)

    def __str__(self):
        return f'{self.plate} - {self.name}'
