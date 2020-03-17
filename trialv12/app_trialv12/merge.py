from django.http import JsonResponse
from .models import *
import json

data = json.load(open('puskesmas_area_pure.geojson'))

