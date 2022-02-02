import json

from django.http import JsonResponse
from django.views.generic import TemplateView

from core.vehicles.models import Vehicle


class VehicleIndex(TemplateView):
    template_name = 'index.html'

    def post(self, request, *args, **kwargs):
        data = {}
        try:
            post = json.loads(request.body)
            vehicles = Vehicle.objects.filter(car_plate=post['car_plate'])
            data = []
            for vehicle in vehicles:
                data.append(vehicle.to_json())
        except Exception as e:
            data['error'] = str(e)
        return JsonResponse(data, safe=False)
