const liveDemo=document.querySelector(".navli2yazi")
const liveDemoi=document.querySelector(".navli2hovafter")

liveDemo.addEventListener("click",()=>{
if(liveDemoi.style.visibility==="visible"){
    liveDemoi.style.visibility="hidden"
}
else{
    liveDemoi.style.visibility="visible"
}
})
const liveDemoBlock=document.querySelector(".navliyazi2blocks")
const livei=document.querySelector(".navliyazi2")

livei.addEventListener("click",()=>{
    if(liveDemoBlock.style.visibility==="visible"){
        liveDemoBlock.style.visibility="hidden"
    }
    else{
        liveDemoBlock.style.visibility="visible"
    }
    })