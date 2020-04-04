"""trialv12 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
#from django.urls import path
from django.conf.urls import url, include
from app_trialv12 import views
from app_trialv12.views import *
from accounts import views as views_acc
from rest_framework import routers

#router = routers.DefaultRouter()
#router.register('pasien', views.pasienJSON)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.index, name='index'),
    url(r'^api/data/$', get_data, name='api-data' ),
    url(r'^login/', views_acc.loginPage, name="login"),
    url(r'^logout/', views_acc.logoutUser, name="logout"),
    url(r'^register/', views_acc.registerPage, name="register"),
    url(r'^edit/profile/', views_acc.editProfile, name="editProfile"),
    url(r'^change/password/', views_acc.changePasswordPage, name="changePass"),
   # url(r'^pasien/', include(router.urls)),
    #url(r'^pasien/', views.pasienJSON, name="pasienJSON"),
    #url(r'^Pasien/', include('app_trialv12.urls')),
    #url(r'^login/', include('accounts.urls')),
    #url(r'^register/', include('accounts.urls')),
]
