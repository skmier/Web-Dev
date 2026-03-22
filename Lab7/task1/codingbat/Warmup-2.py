def string_times(str, n):
    return str * n

def front_times(str, n):
    return str[:3] * n

def string_bits(str):
    return str[::2]

def string_splosion(str):
    res = ""
    for i in range(len(str) + 1):
        res += str[:i]
    return res

def last2(str):
    if len(str) < 2:
        return 0
    last2_chars = str[-2:]
    count = 0
    for i in range(len(str) - 2):
        sub = str[i : i+2]
        if sub == last2_chars:
            count += 1
            
    return count

def array_count9(nums):
    cnt = 0
    for i in range(len(nums)):
        if nums[i] == 9: cnt += 1
    return cnt

def array_front9(nums):
    if(len(nums) >= 4):
        for i in range(4):
            if(nums[i] == 9): return True
    else:
        for i in range(len(nums)):
            if(nums[i] == 9): return True

    return False

def array123(nums):
    for i in range(len(nums) -2):
        if(nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3 ): return True
    return False


def string_match(a, b):
  shorter = min(len(a), len(b))
  cnt = 0
  for i in range(shorter-1):
    a_sub = a[i:i+2]
    b_sub = b[i:i+2]
    if a_sub == b_sub:
        cnt += 1

  return cnt
  