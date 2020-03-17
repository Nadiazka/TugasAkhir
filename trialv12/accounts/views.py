from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm , PasswordChangeForm
from .forms import *
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

# Create your views here.
def registerPage(request):
	form = CreateUserForm()

	if request.method == 'POST':
		form = CreateUserForm(request.POST)
		if form.is_valid():
			form.save()
			user = form.cleaned_data.get('username')
			messages.success(request, 'Selamat '+ user +', akun kamu berhasil dibuat')
			return redirect('login')

	context = {'form' : form}
	return render (request, 'accounts/register.html', context)

def loginPage(request):
	if request.method == 'POST':
		username = request.POST.get('username')
		password = request.POST.get('password')

		user = authenticate(username=username, password=password)

		if user is not None:
			login(request, user)
			return redirect('index')
		else:
			messages.info(request, 'Username atau Password salah')

	return render (request, 'accounts/login.html')

def logoutUser(request):
	logout(request)
	return redirect('login')

def editProfile(request):
	form = UserChangeForm()

	if request.method == 'POST':
		form = UserChangeForm(request.POST)
		if form.is_valid():
			form.save()
			user = form.cleaned_data.get('username')
			messages.success(request, 'Selamat '+ user +', akun kamu berhasil diubah')
			return redirect('index')

	context = {'form' : form}
	return render (request, 'accounts/editProfile.html', context)	

def changePasswordPage(request):
	form = PasswordChangeForm(user=request.user)

	if request.method == 'POST':
		form = PasswordChangeForm(data=request.POST, user=request.user)
		if form.is_valid():
			form.save()
			user = form.cleaned_data.get('username')
			messages.success(request, 'Selamat '+ user +', password kamu berhasil diubah')
			return redirect('editProfile')

	context = {'form' : form}
	return render (request, 'accounts/changePass.html', context)