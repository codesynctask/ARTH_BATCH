const footer = document.querySelector("footer")

let URL = "http://localhost/PHP-MVC%20-%20API/PUBLIC/account"
let offset = 0

async function paginationFetch() {
    const res = await fetch(URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            offset:0,
            limit:100
        })
    })

    const data = await res.json()
    // console.log(data.length)

}

paginationFetch()



// 1. decide the number of pagination link according to data length




