class Human:
    # variable + class = attributes
    def __init__(self,name,age,gender):
        self.name = name
        self.age = age
        self.gender = gender
    # function + class = method
    def speak(self):
        print(self.name ,": I am speaking")

    def intro(self):
        print(f"Hello I am {self.name} , my age is {self.age} and I am {self.gender}👋")



# class implementation = object 

h1 = Human("John Doe",21,"Male") # class = Human
h2 = Human("Ash",16,"Male")

# updating object attribute
# h2.name = "Ash Ketchum"

# accessing object attribute
# print(h1.name)


h1.intro()
h2.intro()


class Employee:
    name = ""
    salary = 0
    department = ""
    gender = ""
    job_role = ""


    def work(self):
        print("Employee is working now")

    def leave(self):
        print("Employee is on leave")

    def presentation(self):
        print("Employee is presenting something")

    def lunch_break(self):
        print("Employee is on lunch break")

    def overtime(self):
        print("Employee is on overtime work")



