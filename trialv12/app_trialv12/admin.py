from django.contrib import admin
from app_trialv12.models import *
# Register your models here.

admin.site.register(Pasien)
admin.site.register(Puskesmas)
admin.site.register(Indeks)
admin.site.register(ICD10_Chapter)
admin.site.register(ICD10_Subchapter)
admin.site.register(ICD10_Kategori)
admin.site.register(ICD10_Subkategori)
admin.site.register(Kasus)
admin.site.register(Jumlah_Kasus)
#admin.site.register(Data_User)