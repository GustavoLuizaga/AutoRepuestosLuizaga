from django.shortcuts import render
from django.http import JsonResponse
from .models import Product

# Create your views here.

def search(request):
    products = Product.objects.all()
    return render(request, 'search_products.html', {'products': products})


def search_products(request):
    query = request.GET.get('q', '')
    if query:
        products = Product.objects.filter(name__icontains=query).values('id', 'name', 'price')
        return JsonResponse({'products': list(products)})
    else:
        return JsonResponse({'products': []})
