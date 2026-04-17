from django.http import JsonResponse
from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
# Create your views here.

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    @action(methods=['get'], detail=True)
    def products(self, request,pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category)

        serializer = ProductSerializer(products, many=True)

        return Response(serializer.data)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name']
    ordering_fields = ['name','price']

    def get_queryset(self):
        queryset = Product.objects.all()

        category_id = self.request.query_params.get('category')
        is_active = self.request.query_params.get('is_active')

        if category_id is not None:
            queryset = queryset.filter(category_id=category_id)

        if is_active is not None:
            active_val = is_active.lower() == 'true'
            queryset = queryset.filter(is_active=active_val)

        return queryset

    @action(methods=['get'], detail=False)
    def active(self,request):
        active_products = Product.objects.filter(is_active=True)
        filetered = self.filter_queryset(active_products)

        serializer = self.get_serializer(filetered,many=True)
        return Response(serializer.data)


#
# #Lab 8
# def home(request):
#     return HttpResponse("Main page.")
#
#
# def allProducts(request):
#     products = Product.objects.all()
#
#     category_id = request.GET.get('category')
#     active = request.GET.get('active')
#     search = request.GET.get('search')
#
#     if category_id:
#         products = products.filter(category_id=category_id)
#
#     if active is not None:
#         is_active_val = active.lower() == 'true'
#         products = products.filter(is_active=is_active_val)
#
#     if search :
#         products = products.filter(name__icontains=search)
#
#     data = [p.to_json() for p in products]
#
#     return JsonResponse(data,safe=False,json_dumps_params={
#         'ensure_ascii': False,
#         'indent': 4})
#
#
# def getProductById(request,id):
#     try:
#         data = Product.objects.get(id=id)
#     except Product.DoesNotExist:
#         return JsonResponse({"error": "Product does not exist"} ,status=404)
#
#     return JsonResponse(data.to_json(),json_dumps_params={
#             'ensure_ascii': False,
#             'indent': 4
#         })
#
#
# def allCategories(request):
#     data = [c.to_json() for c in Category.objects.all()]
#     return JsonResponse(data,safe=False,json_dumps_params={
#             'ensure_ascii': False,
#             'indent': 4
#         })
#
#
# def getCategoryById(request,id):
#     try:
#         data = Category.objects.get(id=id)
#     except Category.DoesNotExist:
#         return JsonResponse({"error": "Category does not exist"}, status=404)
#     return JsonResponse(data.to_json(), safe=False, json_dumps_params={
#         'ensure_ascii': False,
#         'indent': 4
#     })
#
# def allProductsByCategory(request,id):
#     try:
#         category = Category.objects.get(id=id)
#     except Category.DoesNotExist:
#         return JsonResponse({"error": "Category does not exist"}, status=404)
#     data = [p.to_json() for p in Product.objects.filter(category=category).all()]
#     return JsonResponse(data,safe=False,json_dumps_params={
#         'ensure_ascii': False,
#         'indent': 4
#     })

