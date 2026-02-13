# Goal : adv data types, Function

"""

-----Holds multiple values

List✅
Tuple

dict

set
frozenset

"""



# 1. List[]
lst = [627,1291,912921]

# 627 -> 0 index

# print(type(lst))
# print(lst[1])  accessing elemts

# update elements to list
lst[1] = 89

# add elements to list
lst.append(77)
lst.remove(627)


# 2. Tuple()
tup = (627,1291,912921,12,12,627,12,12,12) # creating tuple
# only differnce between tuple and list is, tuple can not be updated(create,delete,update)

# print(type(tup)) # data type checking

# access elements
# print(tup[1])

# print(tup.count(1))





# 3. dict{}
# teacher1 = {
#     "name" : "Deepak",
#     "age":22,
#     "teach": ["FSD","FCIT","MDSE","DA"]
# }
# teacher2 = {
#     "name" : "Gaurav",
#     "age":24,
#     "teach": ["FSD","DM","ADV.Exc"]
# }
# teacher3 = {
#     "name" : "Raviraj",
#     "age":25,
#     "teach": ["E-acc","DA"]
# }

# Better version : [{},{},{}]
ArthTeachers = [
    {
        "name" : "Deepak",
        "age":22,
        "teach": ["FSD","FCIT","MDSE","DA"],
        "gender":"male"
    },
    {
        "name" : "Gaurav",
        "age":24,
        "teach": ["FSD","DM","ADV.Exc"]
    },
    {
        "name" : "Raviraj",
        "age":25,
        "teach": ["E-acc","DA"]
    }
]


newTeacher =     {
    "name" : "nishant",
    "age":22,
    "teach": ["graphic","video editing"]
}

ArthTeachers.append(newTeacher)

# print(ArthTeachers)



# -------- FUNCTION : block of reuable code
# 1. function define
def sayHello(userName):
    print("hello i am",userName)

# sayHello : function name
# userName : parameters
# print("hello i am",userName) : logic of function block

# 2. call to function
sayHello("python")
sayHello("php")


