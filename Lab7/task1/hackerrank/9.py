import calendar

line = input().split()

month = int(line[0])
day = int(line[0])
year = int(line[0])

day_index = calendar.weekday(year, month, day)
day_name_uppercase = calendar.day_name[day_index].upper()
print(day_name_uppercase)