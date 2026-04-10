// Elemnts selection
const toDoCont = document.querySelector("ul")
const createTodoBtn = document.querySelector("button")
const taskNameInput = document.querySelector("input")
const todoData = JSON.parse(localStorage.getItem("todoData")) ?? [];


// const tempTodoData = [
    // {
    //     "name":"learn JS DOM",
    //     "status":false
    // },
//     {
//         "name":"learn Python OOPs",
//         "status":true
//     },
//     {
//         "name":"learn IoT",
//         "status":false
//     },

// ]
// localStorage.setItem("todoData",JSON.stringify(tempTodoData));
// console.log(todoData[1]);



// todoData.forEach(todo => {
//     console.log(todo["status"])
// });





createTodoBtn.addEventListener("click",()=>{
    if(taskNameInput.value === ""){
        return
    }
    let liElm = document.createElement("li")
    liElm.innerText = taskNameInput.value
    liElm.setAttribute("class","flex justify-between item-center w-[80vw] m-auto p-4 rounded-md shadow-md")
    
    toDoCont.append(liElm)

    taskNameInput.value = ""
})



function saveTodoData(data){
    todoData.push(data)
    console.log(todoData)

    localStorage.setItem("todoData",JSON.stringify(todoData));
}

saveTodoData({
    "name":"complete Todo app",
    "status":false
})

