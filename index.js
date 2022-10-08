const left=document.querySelector('.prev')
const right=document.querySelector('.next')
const image= document.querySelector('.img-container')
//return a node list including all the images we added
const eachImg= document.querySelectorAll('img')
let timeOut  //using a vriable here so we can use clearTimeOut function to clear the setTimeOut as the user also tries to click the buttons
let currentImg = 1;
right.addEventListener('click', ()=>{
    currentImg++
    clearTimeout(timeOut)
    updateImage()
})
function updateImage(){
    if(currentImg > eachImg.length){
        currentImg= 1
    }
    else if(currentImg < 1){
        currentImg = eachImg.length
    }
    //using currentImg-1 bcz we incremented it previously//500 is the width of the img
    image.style.transform= `translateX(-${(currentImg -1) * 500}px)`
    timeOut= setTimeout(() =>{
        currentImg++
        updateImage()
    },3000)
}
updateImage()

left.addEventListener('click', ()=>{
    currentImg--
    clearTimeout(timeOut)
    updateImage()
})

