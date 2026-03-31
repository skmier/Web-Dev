from .models import Category, Product
from django.http import HttpResponse, JsonResponse

# Create your views here.
def home(request):
    return HttpResponse("Main page.")


def allProducts(request):
    data = [p.to_json() for p in Product.objects.all()]
    return JsonResponse(data,safe=False,json_dumps_params={
            'ensure_ascii': False,
            'indent': 4
        })

def getProductById(request,id):
    try:
        data = Product.objects.get(id=id)
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product does not exist"} ,status=404)

    return JsonResponse(data.to_json(),json_dumps_params={
            'ensure_ascii': False,
            'indent': 4
        })


def allCategories(request):
    data = [c.to_json() for c in Category.objects.all()]
    return JsonResponse(data,safe=False,json_dumps_params={
            'ensure_ascii': False,
            'indent': 4
        })


def getCategoryById(request,id):
    try:
        data = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category does not exist"}, status=404)
    return JsonResponse(data.to_json(), safe=False, json_dumps_params={
        'ensure_ascii': False,
        'indent': 4
    })

def allProductsByCategory(request,id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category does not exist"}, status=404)
    data = [p.to_json() for p in Product.objects.filter(category=category).all()]
    return JsonResponse(data,safe=False,json_dumps_params={
        'ensure_ascii': False,
        'indent': 4
    })
    # try:
    #     category = Category.objects.get(id=id)
    # except Category.DoesNotExist:
    #     return JsonResponse({"error": "Category not found"}, status=404)
    # data = [p.to_json() for p in Product.objects.filter(category=category).all()]
    # return JsonResponse(data, safe=False)
