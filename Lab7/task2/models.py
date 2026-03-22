class Animal:
    def __init__(self, name, age,weight ):
        self.name = name
        self.age = age
        self.weight = weight
    
    def makeSound(self):
        print("Something")

    def eat(self,food):
        print(f"{self.name} eats {food}")

    def __str__(self):
        return f"Name: {self.name} Age: {self.age} Weight: {self.weight}"


class Dog(Animal):
    def __init__(self, name, age, weight,breed):
        super().__init__(name, age, weight)
        self.breed = breed

    def makeSound(self):
        print("Woof Woof")
    
    def __str__(self):
        return super().__str__() + f" Breed: {self.breed}"


class Cat(Animal):
    def __init__(self, name, age, weight,color):
        super().__init__(name, age, weight)
        self.color = color

    def makeSound(self):
        print("Meow Meow")

    def __str__(self):
        return super().__str__() + f" Color: {self.color}"

