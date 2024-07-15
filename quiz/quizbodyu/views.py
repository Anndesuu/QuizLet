from django.shortcuts import render

def welcome(request):
    return render(request, "welcomepage.html")

def category(request):
    return render(request, "category.html")

def geo(request):
    return render(request, "geography.html")

def science(request):
    return render(request, "science.html");

def animals(request):
    return render(request, "animals.html");