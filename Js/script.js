let menu = document.querySelector(".topBar_leftSide_list")
let menuBtn = document.querySelector(".topBar_rightSide_icon_mobile_bar")
let menuBtnIcon = document.querySelector(".topBar_rightSide_icon_mobile_bar svg")
let menuBtnClose = document.querySelector(".close")
menuBtn.addEventListener("click",function(){
    if (menuBtnIcon.classList.contains("open")){
        menu.style.left = "0"
        menuBtnIcon.classList = "close"
        menuBtnClose.style.display = "block"
    }
})

menuBtnClose.addEventListener("click",function(){
    if(menuBtnIcon.classList.contains("close")){
        menu.style.left = "-256px"
        menuBtnIcon.classList = "open"
        menuBtnClose.style.display = "none"
    }
})
