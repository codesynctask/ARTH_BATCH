const url = "https://jsonplaceholder.typicode.com/users/1"
const showBtn = document.getElementById("show")
const loadingCont = document.querySelector(".skeleton")
const profileCont = document.querySelector(".card")



showBtn.addEventListener("click", fetchProfileData)



function fetchProfileData() {
    if (profileCont.style.display === "block") {
        return
    }

    const xhr = new XMLHttpRequest()

    xhr.open("get", url, true)

    loadingCont.style.display = "block"


    xhr.onload = function () {

        setTimeout(function () {
            const data = JSON.parse(xhr.responseText)
            console.log(data)

            profileCont.style.display = "block"
            loadingCont.style.display = "none"
        },4000)
    }


    xhr.onerror = function(){
        console.log("error")
    }


    xhr.send()//confirm send
}










