from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.welcome, name = "home"),
    path('category', views.category, name = "category"),
    path('geography', views.geo, name = "geo"),
    path("science", views.science, name = "science"),
    path("animals", views.animals, name = "animals"),
]