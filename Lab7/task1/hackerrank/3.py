#math
def pow(a,b,m):
    org = a
    for i in range(b-1):
        a *= org
    print(a)
    print(a%m)

a = int(input())
b = int(input())
m = int(input())

pow(a,b,m)
