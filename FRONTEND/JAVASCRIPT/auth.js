/*
var[{user1},{user2},{}]


CRUD
C- create
R- Read
U - Update
D- Delete


Data - array and objects

Auth
- signup -      C
- login - R
- reset -       U
- deactive - D
*/

// const userData = [] //array



// C : at last
// userData.unshift("Random User")//first
// userData.push("sanskar") //last

// R : find
// reading all users
// console.log(userData)

// reading one by one
// for (let i = 0; i < userData.length; i++) {
//     console.log("hello",userData[i])
// }

// userData.forEach(function(user){
//     console.log("hello",user)
// })

// U : find and update
// userData[0] = "Updated user"

// D : find and delete
// delete userData[0] 
// userData.pop() // last elm delete









// find user with name "deepak" and read
// userData.forEach(function(user,i){
//     if(user==="deepak"){
//         // console.log("Hello Admin")
//         // userData[i] = "ok"
//     }else{
//         console.log("users")
//     }
// })

// console.log(userData)

// array methods


const userData = [] // array of objects

// CREATE NEW USER : function

// function declaration + definition
// parameter : variable for functions

function createUser(name, age , gender , country="IND" , role="user") {
    // user schema ready only
    if(!name || !age || !gender){
        console.log("error")
        return
    }

    if(!(name.length>=3)){
        // name lenght validation
        console.log("name is not perfect")
        return
    }
    if(!(Number(age)>=12 && Number(age)<=90)){
        // age value validation
        console.log("age is not perfect")
        return
    }


    const newUserSchema = {
        "id": userData.length + 1,
        "name": name,
        "age": age,
        "gender": gender,
        "country":country,
        "role": role
    }

    // adding new user to userData[]
    userData.push(newUserSchema)
}


// call to function
// passign value to function variable(parameter) ---> passing argument
// createUser("xyz",26,"male")
// createUser("abc",28,"male")
createUser("John Doe",22,"male")
createUser("Kajal",28,"female")
createUser("Khushi",21,"female")
// console.log(userData) //reading all user data
// SIGNUP of user



function findUserById(id) {
    let foundUser = null;
    if(!id){
        console.log("Id is missing")
        return
    }

    userData.forEach(function (user) {
        if(user["id"]==id){
            foundUser = user
        }
    })

    return foundUser
}

let foundUser = findUserById(78)
console.log(foundUser)