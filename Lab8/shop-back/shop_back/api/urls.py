from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.home, name='main_page'),
    path('products/', views.allProducts, name='all_products'),
    path('products/<int:id>/', views.getProductById, name='product_by_id'),

    path('categories/', views.allCategories, name='categories'),

    path('categories/<int:id>/', views.getCategoryById, name='category_by_id'),

    path('categories/<int:id>/products/', views.allProductsByCategory, name='products_by_category'),
]
