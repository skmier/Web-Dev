from django.contrib import admin
from .models import Category, Product

# Register your models here.
# admin.site.register(Category)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id','name','price','count','is_active','category')
    list_filter = ('category','is_active')
    search_fields = ('name',)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id','name',)
    search_fields = ('name',)