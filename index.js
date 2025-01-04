let btnOpen = document.querySelector("#btnMenu")
let btnClose = document.querySelector("#btnClose")
let links = document.querySelector("#link")

btnOpen.addEventListener("click",function(){
    links.style.display = "flex"
    btnOpen.style.display = "none"
    btnClose.style.display = "flex"
})
btnClose.addEventListener("click",function(){
    links.style.display = "none"
    btnClose.style.display = "none"
    btnOpen.style.display = "flex"
})
