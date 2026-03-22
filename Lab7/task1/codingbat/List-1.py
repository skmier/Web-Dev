def first_last6(nums):
    if(nums[-1] == 6 or nums[0] == 6): return True
    return False

def same_first_last(nums):
   return len(nums) >= 1 and nums[0] == nums[-1]

def make_pi():
    arr = [3,1,4]
    return arr

def common_end(a, b):
    return a[0] == b[0] or a[-1] == b[-1]

def sum3(nums):
    sum = 0
    for i in nums:
        sum += i
    return sum

def rotate_left3(nums):
    return nums[1:] + [nums[0]]

def reverse3(nums):
    arr = []
    for i in range(len(nums) -1 , -1, -1):
        arr.append(nums[i])
    return arr

def max_end3(nums):
    max = nums[0]
    if(nums[0] > nums[-1]):
        max = nums[0]
    else:
        max = nums[-1]
    for i in range(3):
        nums[i] = max
    return nums

def sum2(nums):
    if(len(nums) >= 2): return nums[0] + nums[1]
    elif len(nums) == 1: return nums[0]
    return 0

def middle_way(a, b):
    arr = [a[1],b[1]]
    return arr

def make_ends(nums):
    arr = [nums[0], nums[-1]]
    return arr

def has23(nums):
    return nums[0] == 2 or nums[-1] == 2 or nums[0] == 3 or nums[-1] == 3