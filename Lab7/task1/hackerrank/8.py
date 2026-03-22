t = int(input())

while t > 0:
    try:
        line = input().split()
        a = int(line[0])
        b = int(line[1])
        print(a // b)
    except ValueError as v:
        print("Error Code:",v)
    except ZeroDivisionError as e:
        print("Error Code:",e)

    t -= 1