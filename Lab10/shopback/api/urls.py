from django.urls import path
from .views import fbv
from .views import cbv
from .views import mixins
from .views import generics

urlpatterns = [
    path('fbvproducts/', fbv.product_list),
    path('fbvproduct/<int:product_id>/',fbv.product_detail),
    path('cbvproducts/', cbv.ProductListAPIView.as_view()),
    path('cbvproduct/<int:product_id>/',cbv.ProductDetailAPIView.as_view()),
    path('mixproducts/',mixins.ProductListAPIView.as_view()),
    path('mixproduct/<int:product_ud>/', mixins.ProductDetailAPIView.as_view()),

    path('gencategories/', generics.CategoryListAPIView.as_view()),
    path('gencategories/<int:category_id>/', generics.CategoryDetailAPIView.as_view()),
    path('gencategories/<int:category_id>/products/', generics.CategoryProductsAPIView.as_view()),
    path('genproducts/', generics.ProductListAPIView.as_view()),
    path('genproducts/<int:product_id>/', generics.ProductDetailAPIView.as_view())
]