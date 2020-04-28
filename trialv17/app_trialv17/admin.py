from django.contrib import admin
from .models import *
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from django.contrib.gis import admin
# Register your models here.

admin.site.site_header = "Admin BANDUNG HEALTH GEOGRAPHICAL INFORMATION SYSTEM"
admin.site.register(AreaPuskesmas, admin.OSMGeoAdmin)
admin.site.register(TitikPuskesmas, admin.OSMGeoAdmin)

#Membuat kelas Resource
class PasienResource(resources.ModelResource):
	class Meta:
		model = Pasien
		import_id_fields = ('kat_pasien',)

class KecamatanResource(resources.ModelResource):
	class Meta:
		model = Kecamatan
		import_id_fields = ('kode_kec',)

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

class ICD10_SubchapterResource(resources.ModelResource):
	class Meta:
		model = ICD10_Subchapter
		import_id_fields = ('subchapter',)

class ICD10_KategoriResource(resources.ModelResource):
	class Meta:
		model = ICD10_Kategori
		import_id_fields = ('kat',)

class ICD10_SubkategoriResource(resources.ModelResource):
	class Meta:
		model = ICD10_Subkategori
		import_id_fields = ('subkat',)

class KasusResource(resources.ModelResource):
	class Meta:
		model = Kasus
		import_id_fields = ('kode',)

class JumlahKasusResource(resources.ModelResource):
	class Meta:
		model = Jumlah_Kasus
		import_id_fields = ('kode',)

class JumlahKategoriResource(resources.ModelResource):
	class Meta:
		model = Jumlah_Kategori
		import_id_fields = ('kode',)


#Register to admin site
@admin.register(Pasien)
class ViewPasien(ImportExportModelAdmin):
	resource_class = PasienResource

@admin.register(Kecamatan)
class ViewKecamatan(ImportExportModelAdmin):
	resource_class = KecamatanResource

@admin.register(Puskesmas)
class ViewPuskesmas(ImportExportModelAdmin):
	resource_class = PuskesmasResource

@admin.register(Indeks)
class ViewIndeks(ImportExportModelAdmin):
	resource_class = IndeksResource

@admin.register(ICD10_Chapter)
class ViewICD10_Chapter(ImportExportModelAdmin):
	resource_class = ICD10_ChapterResource

@admin.register(ICD10_Subchapter)
class ViewICD10_Subchapter(ImportExportModelAdmin):
	resource_class = ICD10_SubchapterResource

@admin.register(ICD10_Kategori)
class ViewICD10_Kategori(ImportExportModelAdmin):
	resource_class = ICD10_KategoriResource

@admin.register(ICD10_Subkategori)
class ViewSubkategori(ImportExportModelAdmin):
	resource_class = ICD10_SubkategoriResource

@admin.register(Kasus)
class ViewKasus(ImportExportModelAdmin):
	resource_class = KasusResource

@admin.register(Jumlah_Kasus)
class ViewJumlahKasus(ImportExportModelAdmin):
	resource_class = JumlahKasusResource

@admin.register(Jumlah_Kategori)
class ViewJumlahKategori(ImportExportModelAdmin):
	resource_class = JumlahKategoriResource