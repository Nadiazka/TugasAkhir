from django.conf.urls import url
from app_trialv12 import views

urlpatterns =[
	#url(r'^Pasien', views.pasienJSON, name="pasienJSON"),
	url(r'^PasienAPI/', views.PasienAPI.as_view())
]