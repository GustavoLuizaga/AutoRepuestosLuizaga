from django.db import models

# Create your models here.
class Brand(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=4)


class Product(models.Model):
    stock = models.IntegerField(default=0)
    code = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.TextField()
    imag_url = models.CharField(max_length=100)
    reorder= models.IntegerField(default=0)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)





