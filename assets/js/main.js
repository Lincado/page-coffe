const p = document.querySelector(".inner-p")
p.innerText = "<Great Code/>"

const btnMenuMobile = document.querySelector("#btn-menu-mobile")
btnMenuMobile.innerHTML = `<img src="./assets/img/menu-buguer-open.svg" alt="close menu">`

function toggleMenu (event) {
    const nav = document.getElementById("nav")
    const active =nav.classList.toggle("active") 
    if(active === true) {
    btnMenuMobile.innerHTML = `<img src="./assets/img/menu-buguer-close.svg" alt="close menu">`
    } else {
        btnMenuMobile.innerHTML = `<img src="./assets/img/menu-buguer-open.svg" alt="open menu">`
    }
}

btnMenuMobile.addEventListener("click", toggleMenu)

const header = document.querySelector(".menu")
const divLogo = document.querySelector(".logo")
const divBuyMyCoffee = document.createElement("div")
const ul = document.querySelector("ul")
const main = document.querySelector("main")

divBuyMyCoffee.innerHTML = `<a href="#" class="btn-my-coffee">PEGAR MEU CAFÉ</a>`


function widthPositionBtnCoffe(){
    if(window.matchMedia("(min-width: 951px)").matches) {
        divLogo.innerHTML = `<img src="./assets/img/logo-desktop.svg" alt="logo da loja de café">`
        header.insertBefore(divBuyMyCoffee, ul.nextElementSibling)
    } else {
        divLogo.innerHTML = `<img src="./assets/img/logo-mobile.svg" alt="logo da loja de café">`
        main.insertBefore(divBuyMyCoffee, header.nextElementSibling)
    }
}

widthPositionBtnCoffe()
window.addEventListener("resize", widthPositionBtnCoffe)
