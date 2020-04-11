from django.db.models import Q
from django.db import models

class filter(models.Manager):
	@classmethod
	def filterWilayah(self, query=None):
		qs = self.get_queryset()
		if query is not None:
			or_lookup = (Q(kode__kode_pkm__nama_pkm__iexact=query) |
				Q(kode__kode_pkm__kecamatan__iexact=query))
			qs = qs.filter(or_lookup).values('kasus_baru', 'kasus_lama')
		return qs

	@classmethod
	def filterPenyakit(self, query=None):
		qs = self.get_queryset()
		if query is not None:
			or_lookup = (Q(icd_10__nama_subkat__icontains=query) |
				Q(icd_10__kat__nama_kat__icontains=query) |
				Q(icd_10__kat__subchapter__nama_subchapter__icontains=query) |
				Q(icd_10__kat__subchapter__chapter__nama_chapter__icontains=query))
			qs = qs.filter(or_lookup).values('kasus_baru', 'kasus_lama')
		return qs

	@classmethod
	def filterJenisKelamin(self, query=None):
		qs = self.get_queryset()
		if query is not None:
			qs = qs.filter(kat_pasien__jenis_kelamin__iexact=query).values('kasus_baru', 'kasus_lama')
		return qs
	#jangan lupa filter dibawah bisa pake range

	@classmethod
	def filterUmur(self, query=None):
		qs = self.get_queryset()
		if query is not None:
			qs = qs.filter(kat_pasien__umur__icontains=query).values('kasus_baru', 'kasus_lama')
		return qs

	@classmethod
	def filterPeriode(self, query=None):
		qs = self.get_queryset()
		if query is not None:
			qs = qs.filter(kode__tanggal__icontains=query).values('kasus_baru', 'kasus_lama')
		return qs

class Pasien(models.Model):
	"""docstring for Pasien"""
	kat_pasien = models.AutoField( primary_key=True)
	umur = models.CharField(max_length=10)
	jenis_kelamin = models.CharField(max_length=10)

	def __str__(self):
		return str(self.kat_pasien)

class Puskesmas(models.Model):
	"""docstring for Puskesmas"""
	kode_pkm = models.CharField(max_length=12, primary_key=True)
	nama_pkm = models.CharField(max_length=30)
	kecamatan = models.CharField(max_length=30)

	def __str__(self):
		return self.nama_pkm

class Indeks(models.Model):
	kode = models.AutoField(primary_key=True)
	kode_pkm = models.ForeignKey(Puskesmas, on_delete=models.CASCADE)
	tanggal = models.DateField()
	deleted = models.IntegerField()
	last_upload = models.IntegerField()

	def __str__(self):
		return str(self.kode)

		
class ICD10_Chapter(models.Model):
	"""docstring for ICD10_Chapter"""
	chapter = models.CharField(max_length=5, primary_key=True)
	nama_chapter = models.CharField(max_length=30)

	def __str__(self):
		return self.nama_chapter

class ICD10_Subchapter(models.Model):
	"""docstring for ICD10_subchapter"""
	subchapter = models.CharField(max_length=10, primary_key=True)
	chapter = models.ForeignKey(ICD10_Chapter, on_delete=models.CASCADE)
	nama_subchapter = models.CharField(max_length=30)

	def __str__(self):
		return self.nama_subchapter

class ICD10_Kategori(models.Model):
	"""docstring for ICD10_Kategori"""
	kat = models.CharField(max_length=4, primary_key=True)
	subchapter = models.ForeignKey(ICD10_Subchapter, on_delete=models.CASCADE)
	nama_kat = models.CharField(max_length=30)

	def __str__(self):
		return self.nama_kat
						
class ICD10_Subkategori(models.Model):
	"""docstring for ICD10_Subkategori"""
	subkat = models.CharField(max_length=8, primary_key=True)
	kat = models.ForeignKey(ICD10_Kategori, on_delete=models.CASCADE)
	nama_subkat = models.CharField(max_length=100)

	def __str__(self):
		return self.nama_subkat

class Jumlah_Kasus(models.Model):
	kode = models.ForeignKey(Indeks, on_delete=models.CASCADE)
	icd_10 = models.ForeignKey(ICD10_Subkategori, on_delete=models.CASCADE)
	jumlah_baru_l = models.IntegerField()
	jumlah_baru_p = models.IntegerField()
	jumlah_lama_l = models.IntegerField()
	jumlah_lama_p = models.IntegerField()
	gakin = models.IntegerField()

	def __str__(self):
		return '%s %s' % (self.kode, self.icd_10)

class Kasus(models.Model):
	kode = models.ForeignKey(Indeks, on_delete=models.CASCADE)
	icd_10 = models.ForeignKey(ICD10_Subkategori, on_delete=models.CASCADE)
	kat_pasien = models.ForeignKey(Pasien, on_delete=models.CASCADE)
	kasus_baru = models.IntegerField()
	kasus_lama = models.IntegerField()
	objects = filter()

	def __str__(self):
		return str(self.icd_10)
"""
class Jumlah_Kasus(models.Model):
	kode = models.ForeignKey(Indeks, on_delete=models.CASCADE)
	icd_10 = models.ForeignKey(ICD10_Subkategori, on_delete=models.CASCADE)
	umur = models.ForeignKey(Pasien, on_delete=models.CASCADE)
	jumlah_baru_l = models.IntegerField()
	jumlah_baru_p = models.IntegerField()
	jumlah_lama_l = models.IntegerField()
	jumlah_lama_p = models.IntegerField()
	gakin = models.IntegerField()

	def __str__(self):
		return '%s %s' % (self.kode, self.icd_10)
"""																						