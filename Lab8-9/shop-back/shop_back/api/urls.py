from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('products', views.ProductViewSet)
router.register('categories', views.CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('products/', views.allProducts, name='all_products'),
    # path('products/<int:id>/', views.getProductById, name='product_by_id'),
    #
    # path('categories/', views.allCategories, name='categories'),
    #
    # path('categories/<int:id>/', views.getCategoryById, name='category_by_id'),

    # path('categories/<int:id>/products/', views.allProductsByCategory, name='products_by_category'),
]
