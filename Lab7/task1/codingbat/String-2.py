def double_char(str):
    res = ""
    for char in str:
        res += char + char
    return res

def count_hi(str):
    cnt = 0
    for i in range(len(str)-1):
        if(str[i] == "h" and str[i+1] =="i"):
            cnt += 1
    
    return cnt

def cat_dog(str):
    dgcnt = 0
    ctcnt = 0
    for i in range(len(str) - 2):
        if(str[i] == "c" and str[i+1] == "a" and str[i+2] == "t") : ctcnt +=1
        elif(str[i] == "d" and str[i+1] == "o" and str[i+2] == "g"): dgcnt += 1
    return dgcnt == ctcnt

def count_code(str):
    cnt = 0
    for i in range(len(str) - 3):
        if(str[i] == "c" and str[i+1] == "o" and  str[i+2] == "d" and str[i+3] == "e"): cnt += 1
        elif(str[i] == "c" and str[i+1] == "o" and str[i+2] == "d"): cnt += 1
        elif(str[i] == "c" and str[i+1] == "o" and str[i+3] == "e"): cnt += 1

    return cnt

def end_other(a, b):
  a_lower = a.lower()
  b_lower = b.lower()
  return a_lower.endswith(b_lower) or b_lower.endswith(a_lower)

def xyz_there(str):
  for i in range(len(str) - 2):
    if str[i:i+3] == 'xyz' and (i == 0 or str[i-1] != '.'):
        return True
  return False