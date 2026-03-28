const departmentDropDown = document.getElementById("department");
const departmentURL = "http://localhost:3000/department"

departmentDropDown.addEventListener("change",async ()=>{
    // console.log("some changes made")
    const res = await fetch(departmentURL)
    const departmentData = await res.json()
    // console.log(departmentData)
    // departmentData.foreach((department)=>{
    //     console.log(department)
    // })  
    // console.log(departmentData[0])
    departmentData.map((department)=>)
})