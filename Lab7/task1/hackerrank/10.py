from itertools import permutations
line = input().split()

s = line[0]
k = int(line[1])
s = sorted(s)
res = list(permutations(s,k))

for i in res:
    print("".join(i))