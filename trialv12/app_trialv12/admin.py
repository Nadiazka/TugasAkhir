from django.contrib import admin
from app_trialv12.models import *
from import_export.admin import ImportExportModelAdmin
# Register your models here.

admin.site.site_header = "Admin BANDUNG HEALTH GEOGRAPHICAL INFORMATION SYSTEM"

@admin.register(Pasien, Puskesmas, Indeks, ICD10_Chapter, ICD10_Subchapter, ICD10_Kategori, ICD10_Subkategori, Kasus, Jumlah_Kasus)
class ViewAdmin(ImportExportModelAdmin):
	pass

