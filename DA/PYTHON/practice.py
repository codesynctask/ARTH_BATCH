user1_ID = "DA_2026_001"


data = {
    "DA":"Data Analytics",
    "FCIT":"Foundation course in Info Tech",
    "BCA":"Bachlor's of Comp App."
}

# Print the name of user1 course
# on the basis of id --> Course Name
first_underscore_pos = user1_ID.find("_") # dynamic position of first "_"
course_id = user1_ID[0:first_underscore_pos]
for course_name , course_name_val in data.items():
    if(course_name==course_id):
        print(course_name_val)


