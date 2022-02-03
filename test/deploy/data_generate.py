import json
from config import settings
from core.vehicles.models import Vehicle


def insert_vehicles():
    with open(f'{settings.BASE_DIR}/deploy/vehicles.json', encoding='utf8') as json_file:
        data = json.load(json_file)
        for v in data:
            new_vehicle = Vehicle(car_name=v['name'], car_plate=v['plate'])
            new_vehicle.save()
            print(new_vehicle)


insert_vehicles()
