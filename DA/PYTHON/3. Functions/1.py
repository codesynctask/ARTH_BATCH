"""

# 1. function declare : def keyword
# 2. function define : print()  
def greet(userName):
    print(f"hello {userName}")

# 3. call to function
greet("Tavish")
greet("Deepak")

"""


def printFullName():
    fName = input("What is your first Name :")
    lName = input("What is your last Name :")
    fullName = fName +" "+ lName
    print(f"✅hello your fullname is {fullName}")


# printFullName()

def sumNum(a,b):
    sum = a+b
    print(f"{a} + {b} = {sum} ")


sumNum(7,6)