from django.shortcuts import render
from django.views.generic import TemplateView


class VehicleIndex(TemplateView):
    template_name = 'index.html'
