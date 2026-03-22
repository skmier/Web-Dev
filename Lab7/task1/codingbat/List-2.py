def count_evens(nums):
    cnt = 0
    for i in nums:
        if(i % 2 == 0): cnt += 1
    return cnt

def big_diff(nums):
    return max(nums) - min(nums)

def centered_average(nums):
    nums.remove(min(nums))
    nums.remove(max(nums))
    return sum(nums) // len(nums)

def sum13(nums):
    sum = 0
    for i in range(len(nums)):
        if(nums[i] == 13 ) : continue   
        elif i > 0 and nums[i-1] == 13: continue
        else : sum += nums[i]
    return sum

def sum67(nums):
  sum = 0
  flag = False

  for i in nums:
      if i == 6:
          flag = True
          continue
      elif i == 7 and flag:
          flag = False
          continue
      elif not flag:
          sum += i

  return sum

def has22(nums):
    flag  = False
    for i in range(len(nums) - 1):
        if(nums[i] == 2 and nums[i+1] == 2): flag = True
    
    return flag