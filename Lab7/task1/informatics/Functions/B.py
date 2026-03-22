def power(a,b):
    org_a = a
    for i in range(b-1):
        a *= org_a
    return a

a = int(input())
b = int(input())

print(power(a,b))