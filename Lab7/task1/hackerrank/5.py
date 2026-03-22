from itertools import combinations_with_replacement
data = input().split()
s = data[0]
k = int(data[1])
s = sorted(s)
res = sorted(list(combinations_with_replacement(s,k)))

for i in res:
    print("".join(i))