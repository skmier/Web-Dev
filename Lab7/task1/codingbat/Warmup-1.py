def sleep_in(weekday, vacation):
    if(weekday == False and vacation == False): return True
    elif (weekday == True and vacation == False): return False
    elif (weekday == False and vacation == True): return True
    return True


def monkey_trouble(a_smile, b_smile):
    if(a_smile == True and b_smile == True): return True
    elif(a_smile != True and b_smile != True): return True
    elif(a_smile == True and b_smile == False) : return False
    return False


def sum_double(a, b):
    if (a == b):
        return (a + b) * 2
    return a + b


def diff21(n): 
    return abs(n-21) if n < 21 else 2 * abs(n-21)


def parrot_trouble(talking, hour):
    return talking and (hour < 7 or hour > 20)

def makes10(a, b):
    return (a == 10 or b == 10 or a + b == 10)

def near_hundred(n):
    return ((abs(100 - n) <= 10) or (abs(200 - n) <= 10))

def pos_neg(a, b, negative):
    return a < 0 and b < 0 if negative else (a < 0 and b > 0) or (a > 0 and b < 0)


def not_string(str):
    if(str[:3] == "not"):
        return str
    return "not " + str

def missing_char(str, n):
    return str[:n] + str[n+1:]

def front_back(str):
    if len(str) <= 1:
        return str
    return str[-1] + str[1:-1] + str[0]


def front3(str):
  if len(str) < 3:
      return str * 3    
  
  return str[:3] * 3