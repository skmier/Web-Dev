from collections import deque
d = deque()
n = int(input())


while n > 0:
    data = input().split()
    oper = data[0]
    if(oper == "append"):
        x = int(data[1])
        d.append(x)
    elif oper == "pop":
        if(d):
            d.pop()
    elif oper == "popleft":
        if(d):
            d.popleft()
    elif oper == "appendleft":
        x = int(data[1])
        d.appendleft(x)
    n-=1
print(*d)