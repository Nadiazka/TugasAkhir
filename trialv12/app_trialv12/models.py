from django.db import models

# Create your models here.
"""	
class Spasial(Model):
	nama = models.CharField(max_length=20)
	dataSpasial = JSONField()

	def __str__(self):
		return str(self.nama)
"""		

class Pasien(models.Model):
	"""docstring for Pasien"""
	kat_pasien = models.IntegerField( primary_key=True)
	umur = models.CharField(max_length=10)
	jenis_kelamin = models.IntegerField()

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
	"""docstring for Indeks"""
	kode = models.IntegerField()
	kode_pkm = models.ForeignKey(Puskesmas, on_delete=models.CASCADE)
	tanggal = models.DateField()
	deleted = models.IntegerField()
	last_upload = models.IntegerField()
	#constraint = models.ForeignKey(Upload_Log)

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

class Kasus(models.Model):
	"""docstring for Kasus"""
	kode = models.ForeignKey(Indeks, on_delete=models.CASCADE)
	icd_10 = models.ForeignKey(ICD10_Subkategori, on_delete=models.CASCADE)
	kat_pasien = models.ForeignKey(Pasien, on_delete=models.CASCADE)
	kasus_baru = models.IntegerField()
	kasus_lama = models.IntegerField()

	def __str__(self):
		return self.icd_10

class Jumlah_Kasus(models.Model):
	"""docstring for Jumlah_Kasus"""
	kode = models.ForeignKey(Indeks, on_delete=models.CASCADE)
	icd_10 = models.ForeignKey(ICD10_Subkategori, on_delete=models.CASCADE)
	#umur = models.ForeignKey(Pasien, on_delete=models.CASCADE)
	#jenis_kelamin = models.ForeignKey(Pasien, on_delete=models.CASCADE)
	#jumlah = models.IntegerField()
	jumlah_baru_l = models.IntegerField()
	jumlah_baru_p = models.IntegerField()
	jumlah_lama_l = models.IntegerField()
	jumlah_lama_p = models.IntegerField()
	gakin = models.IntegerField()

	def __str__(self):
		return '%s %s' % (self.kode, self.icd_10)
"""
class Jumlah_Kasus(models.Model):
	kode = models.ForeignKey(Indeks, on_delete=models.CASCADE)
	icd_10 = models.ForeignKey(ICD10_Subkategori, on_delete=models.CASCADE)
	umur = models.ForeignKey(Pasien, on_delete=models.CASCADE)
	#jenis_kelamin = models.ForeignKey(Pasien, on_delete=models.CASCADE)
	#jumlah = models.IntegerField()
	jumlah_baru_l = models.IntegerField()
	jumlah_baru_p = models.IntegerField()
	jumlah_lama_l = models.IntegerField()
	jumlah_lama_p = models.IntegerField()
	gakin = models.IntegerField()

	def __str__(self):
		return '%s %s' % (self.kode, self.icd_10)

class Data_User(models.Model):
	user_ID = models.IntegerField(primary_key=True)
	username = models.CharField(max_length=12)
	password = models.CharField(max_length=20)
	nama_user = models.CharField(max_length=50)
	email = models.EmailField(max_length=40)
	id_dinkes = models.CharField(max_length=30)
	level = models.IntegerField()
	deleted = models.IntegerField()
	
	def __str__():
		self.user_ID
		self.username
		self.password
		self.nama_user
		self.email
		self.id_dinkes
		self.level
		self.deleted
"""
																														