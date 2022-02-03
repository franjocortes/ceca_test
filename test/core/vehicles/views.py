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

            # I get all the matches, you can change to .get(car_plate=post['car_plate']) to get a single result
            vehicles = Vehicle.objects.filter(car_plate__contains=post['car_plate'])

            # Use data as a list to prepare the response
            data = []
            for vehicle in vehicles:
                data.append(vehicle.to_json())

        except Exception as e:
            data['error'] = str(e)
        return JsonResponse(data, safe=False)
