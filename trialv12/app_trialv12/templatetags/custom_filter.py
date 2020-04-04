from django import template
from app_trialv12.models import Kasus

register = template.Library()


@register.filter(is_safe=True)
def getWilayah(value, request):
	qs = Kasus.objects.filterWilayah(request)
	return qs

