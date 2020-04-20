from rest_framework import serializers
from .models import *

class PasienSerializer(serializers.ModelSerializer):
 	class Meta:
 		model = Pasien
 		fields = '__all__'

class PuskesmasSerializer(serializers.ModelSerializer):
 	class Meta:
 		model = Puskesmas
 		fields = '__all__'
"""			
class IndeksSerializer(serializers.ModelSerializer):
 	class Meta:
 		models = Indeks
 		fields = '__all__'

class ICD10_SubchapterSerializer(serializers.ModelSerializer):
 	class Meta:
 		models = ICD10_Subchapter
 		fields = '__all__'

class ICD10_KategoriSerializer(serializers.ModelSerializer):
 	class Meta:
 		models = ICD10_Kategori
 		fields = '__all__'

class ICD10_SubkategoriSerializer(serializers.ModelSerializer):
 	class Meta:
 		models = ICD10_Subkategori
 		fields = '__all__'

class Jumlah_KasusSerializer(serializers.ModelSerializer):
 	class Meta:
 		models = Jumlah_Kasus
 		fields = '__all__'
"""