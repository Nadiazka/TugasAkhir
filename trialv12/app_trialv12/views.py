from django.http import JsonResponse
#from rest_framework.generic import ListAPIView
from django.shortcuts import render
from django.views.generic import View
from .models import *
from django.contrib.auth.decorators import login_required
from .serializers import *

# Create your views here.
@login_required(login_url='login')
def index(request):
	objPasien = Pasien.objects.all()#order_by('kat_pasien')
	objPuskesmas = Puskesmas.objects.all() #order_by('kode_pkm')
	objIndeks = Indeks.objects.all() #order_by('kode')
	objICD10_Chapter = ICD10_Chapter.objects.all() #order_by('chapter')
	objICD10_Subchapter = ICD10_Subchapter.objects.all() #order_by('subchapter')
	objICD10_Kategori = ICD10_Kategori.objects.all() #order_by('kat')
	objICD10_Subkategori = ICD10_Subkategori.objects.all() #order_by('subkat')
	objKasus = Kasus.objects.all() #order_by('kode')
	objJumlah_Kasus = Jumlah_Kasus.objects.all() #order_by('kode')

	context = {
		'objPasien': objPasien,
		'objPuskesmas': objPuskesmas,
		'objIndeks': objIndeks,
		'objICD10_Chapter': objICD10_Chapter,
		'objICD10_Subchapter': objICD10_Subchapter,
		'objICD10_Kategori': objICD10_Kategori,
		'objICD10_Subkategori': objICD10_Subkategori,
		'objKasus': objKasus,
		'objJumlah_Kasus': objJumlah_Kasus
	}
	return render (request, 'app_trialv12/indexV1.html', context)


def get_data(request):
	data = {
			"male_data" : [23,30,21,26,24,13],
			"female_data" : [13,10,8,3,7,12],
			"label_data": ['13-17', '18-24', '25-34', '35-44','45-54','55-64']
			}
	return JsonResponse(data)

def pasienJSON(ListAPIView):
	objPasien = Pasien.objects.all()
	jsonPasien = PasienSerializer