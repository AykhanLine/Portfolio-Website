const header = document.getElementById("header")
const fakeHeader = document.querySelector("#header .fake-header")
const cicon = document.querySelector("#header .right .bar")
const closeIco = document.querySelector("#header .fake-header .right-bar i")
const rightBar = document.querySelector("#header .fake-header .right-bar")
const bigBar = document.querySelector("#header .fake-header .big-bar")
let scrollBtn =document.querySelector("#scrool-top")

const myLoad = document.getElementById("loading")

window.onload =() =>{
  myLoad.classList.add("active-load");
  setTimeout(() =>{
    myLoad.classList.remove("active-load")
  },2000)
}


window.onscroll = function(){
    if(window.scrollY>200) {
        header.classList.add("active-header");
       
       
    }
    else{
        header.classList.remove("active-header");
        
    }
}

cicon.onclick = function(){
  fakeHeader.classList.add("active-fakeheader")
  rightBar.classList.add("active-style")
  bigBar.classList.add("active-big")
}

closeIco.onclick = function(){
  fakeHeader.classList.remove("active-fakeheader")
  rightBar.classList.remove("active-style")
  bigBar.classList.remove("active-big")
}

bigBar.onclick = function(){
    fakeHeader.classList.remove("active-fakeheader")
    rightBar.classList.remove("active-style")
    bigBar.classList.remove("active-big")

}

window.onscroll = function(){
  window.scrollY>=200? scrollBtn.classList.add("active-scrool"):scrollBtn.classList.remove("active-scrool")
}

scrollBtn.addEventListener("click", function()
{
  window.scrollTo(0,0)
})