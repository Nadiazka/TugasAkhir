from django.shortcuts import render
from .models import *

# Create your views here.
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
		#Pasien
		'kat_pasien' : objPasien.kat_pasien,
		'umur' : objPasien.umur,
		'jenis_kelamin' : objPasien.jenis_kelamin,
		#Puskesmas
		'kode_pkm':objPuskesmas.kode_pkm,
		'nama_pkm':objPuskesmas.nama_pkm,
		'kecamatan':objPuskesmas.kecamatan,
		#Indeks
		'kode':objIndeks.kode,
		'kode_pkm':objIndeks.kode_pkm,
		'tanggal':objIndeks.tanggal,
		'deleted':objIndeks.deleted,
		'last_upload':objIndeks.last_upload,
		#ICD10_Chapter
		'chapter':objICD10_Chapter.chapter,
		'nama_chapter':objICD10_Chapter.nama_chapter,
		#ICD10_Subchapter
		'subchapter':objICD10_Subchapter.subchapter,
		'chapter':objICD10_Subchapter.chapter,
		'nama_subchapter':objICD10_Subchapter.nama_subchapter,
		#ICD10_Kategori
		'kat':objICD10_Kategori.kat,
		'subchapter':objICD10_Kategori.subchapter,
		'nama_kat':objICD10_Kategori.nama_kat,
		#ICD10_Subkategori
		'subkat':objICD10_Subkategori.subkat,
		'kat':objICD10_Subkategori.kat,
		'nama_subkat':objICD10_Subkategori.nama_subkat,
		#Kasus
		'kode':objKasus.kode,
		'icd_10':objKasus.icd_10,
		'kat_pasien':objKasus.kat_pasien,
		'kasus_baru':objKasus.kasus_baru,
		'kasus_lama':objKasus.kasus_lama,
		#Jumlah_Kasus
		'kode':objJumlah_Kasus.kode,
		'icd_10':objJumlah_Kasus.icd_10,
		'jumlah_baru_l':objJumlah_Kasus.jumlah_baru_l,
		'jumlah_baru_p':objJumlah_Kasus.jumlah_baru_p,
		'jumlah_lama_l':objJumlah_Kasus.jumlah_lama_l,
		'jumlah_lama_p':objJumlah_Kasus.jumlah_lama_p,
		'gakin':objJumlah_Kasus.gakin
	}

	return render (request, 'app_trialv12/indexV1.html', context)