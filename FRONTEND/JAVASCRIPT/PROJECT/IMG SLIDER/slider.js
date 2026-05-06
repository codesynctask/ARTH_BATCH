// 1. selecting all html element
const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.querySelector('#right-btn');
const slides = document.querySelector('.slides');

let leftValue = 0
let imageCount = 6 - 1
slides.style.left= leftValue+"px" // stating slide

// 2. add event
rightBtn.addEventListener("click",function(){
    // -
    if (leftValue == (-imageCount*400)) {
        console.log("already on last image")
        return
    }
    leftValue -= 400
    slides.style.left= leftValue+"px"
    console.log(leftValue)


})
leftBtn.addEventListener("click",function(){
    // +
    if (leftValue==0) {
        console.log("already on fist image")
        return
    }
    leftValue += 400
    slides.style.left= leftValue+"px"

    console.log(leftValue)
})