n = int(input())
double = 1
i = 0

while True:
    double = 2 ** i
    if(double > n): break
    
    print(double, end=" ")
    i += 1
