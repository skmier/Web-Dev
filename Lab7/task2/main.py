from models import Animal, Dog, Cat

cat = Cat("Kuki",4,5,"black")
dog = Dog("Hatiko",13,15,"hatiko")

animals = [cat,dog]

for ani in animals:
    print(ani)
    ani.makeSound()
    print()
