n = int(input())
arr = []
flag = False

for i in range(n):
    a = int(input())
    arr.append(a)

for i in range(1,n):
    if (( arr[i] > 0 and arr[i-1] > 0 ) or (arr[i] < 0 and arr[i-1] < 0)): 
        flag = True
        break

print("YES" if flag else "NO")