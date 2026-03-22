a = int(input())
i = 1
flag = False
while i <= a:
    if i == a:
        flag = True
        break
    i*=2

print("YES" if flag else "NO")