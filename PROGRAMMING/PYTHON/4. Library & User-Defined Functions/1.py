"""
Task : sum two numbers

input : num1 , num2 , operator(+,-,*,/)

Output : logical based answer



Program : logical codes which run based on some input, process them and provide output. It should definitive , effective and do the task in finite time


Software : combinatiosn of integrated program
"""



# 1. Create the function(declaration + definition) : keyword= def
"""
def name(param1 , param2 ....):
    # code
"""
def sum(num1=0 , num2=0 ):
    # print("Sum of",num1,"and",num2,"is",num1 + num2)
    if(isinstance(num1 , int)):
        print(f"Sum of {num1} and {num2} is {num1 + num2}")
        return num1 + num2
    else:
        print("not number")



# 2. Call the function
"""
sum(5,8)
sum(7,3)
sum()# 0 , 0 = 0
sum("one","fifteen")
sum(None)

"""



sumResult = sum(6,8)
print(sumResult)



"""
Q1: Full Name
Write a Python function or program that takes `firstName` and `lastName` as inputs (strings) and prints the full name by concatenating them with a space between.

Q2: Result Evaluation
Write a Python function `evaluate(marks)` that takes `marks` (integer/float) as input and returns "PASS" if marks >= 35 (or standard passing threshold), otherwise "FAIL".

Q3: Salary After Tax
Write a Python function that takes gross `salary` (float) as input, calculates tax based on India's FY 2025-26 new/old regime slabs (use new by default), applies standard deduction, and returns net salary after tax.

"""