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

const userData = ["rahul","osaka","deepak","gayatri"] //array


// C : at last
// userData.unshift("Random User")//first
userData.push("sanskar") //last

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
// delete userData[0] ❌
// userData.pop() // last elm delete
console.log(userData)






// find user with name "deepak" and read
userData.forEach(function(user,i){
    if(user==="deepak"){
        // console.log("Hello Admin")
        // userData[i] = "ok"
    }else{
        console.log("users")
    }
})

console.log(userData)

// array methods




