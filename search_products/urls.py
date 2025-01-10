from django.urls import path
from search_products import views

urlpatterns = [
    path('search/', views.search, name='search'),
    path('search_products/', views.search_products, name='search_products'),
]