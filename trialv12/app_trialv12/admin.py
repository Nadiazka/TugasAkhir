from django.contrib import admin
from app_trialv12.models import *
from import_export import resources
from import_export.admin import ImportExportModelAdmin
# Register your models here.

admin.site.site_header = "Admin BANDUNG HEALTH GEOGRAPHICAL INFORMATION SYSTEM"


class PasienResource(resources.ModelResource):
	class Meta:
		model = Pasien
		import_id_fields = ('kat_pasien',)

class PuskesmasResource(resources.ModelResource):
	class Meta:
		model = Puskesmas
		import_id_fields = ('kode_pkm',)

class IndeksResource(resources.ModelResource):
	class Meta:
		model = Indeks
		import_id_fields = ('kode',)

class ICD10_ChapterResource(resources.ModelResource):
	class Meta:
		model = ICD10_Chapter
		import_id_fields = ('chapter',)

class ICD10_SubkategoriResource(resources.ModelResource):
	class Meta:
		model = ICD10_Subkategori
		import_id_fields = ('subkat',)
"""
class PasienResource(resources.ModelResource):
	class Meta:
		model = Pasien
		import_id_fields = ('kat_pasien',)

class PasienResource(resources.ModelResource):
	class Meta:
		model = Pasien
		import_id_fields = ('kat_pasien',)
"""
class KasusResource(resources.ModelResource):
	class Meta:
		model = Pasien
		import_id_fields = ('kode',)

@admin.register(Pasien, ICD10_Subchapter, ICD10_Kategori)
class ViewPasien(ImportExportModelAdmin):
	resource_class = PasienResource

@admin.register(Puskesmas)
class ViewPuskesmas(ImportExportModelAdmin):
	resource_class = PuskesmasResource

@admin.register(Indeks)
class ViewIndeks(ImportExportModelAdmin):
	resource_class = IndeksResource

@admin.register(ICD10_Chapter)
class ViewICD10_Chapter(ImportExportModelAdmin):
	resource_class = ICD10_ChapterResource

@admin.register(ICD10_Subkategori)
class ViewPuskesmas(ImportExportModelAdmin):
	resource_class = ICD10_SubkategoriResource
"""
@admin.register(Puskesmas)
class ViewPuskesmas(ImportExportModelAdmin):
	resource_class = PuskesmasResource

@admin.register(Puskesmas)
class ViewPuskesmas(ImportExportModelAdmin):
	resource_class = PuskesmasResource

@admin.register(Kasus)
class ViewKasus(ImportExportModelAdmin):
	resource_class = KasusResource
"""