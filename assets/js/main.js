const p = document.querySelector(".inner-p")
p.innerText = "<Great Code/>"

const btnMenuMobile = document.querySelector("#btn-menu-mobile")

function updateMenuIcon(active) {
    const iconSrc = active ? "./assets/img/menu-buguer-close.svg" : "./assets/img/menu-buguer-open.svg"
    const iconAlt = active ? "close menu" : "open menu"
    btnMenuMobile.innerHTML = `<img src="${iconSrc}" alt="${iconAlt}">`
}

function toggleMenu (event) {
    const nav = document.getElementById("nav")
    const active = nav.classList.toggle("active") 
    updateMenuIcon(active);
}

updateMenuIcon(false)
btnMenuMobile.addEventListener("click", toggleMenu)

const header = document.querySelector(".menu")
const divLogo = document.querySelector(".logo")
const divBuyMyCoffee = document.createElement("div")
const ul = document.querySelector("ul")
const main = document.querySelector("main")
const minWidthMediaQuery = "(min-width: 951px)"
divBuyMyCoffee.innerHTML = `<a href="#" class="btn-my-coffee">PEGAR MEU CAFÉ</a>`

function positionBuyMyCoffeeButton(){
    if(window.matchMedia(minWidthMediaQuery).matches) {
        divLogo.innerHTML = `<img src="./assets/img/logo-desktop.svg" alt="logo da loja de café">`
        header.insertBefore(divBuyMyCoffee, ul.nextElementSibling)
    } else {
        divLogo.innerHTML = `<img src="./assets/img/logo-mobile.svg" alt="logo da loja de café">`
        main.insertBefore(divBuyMyCoffee, header.nextElementSibling)
    }
}

positionBuyMyCoffeeButton()
window.addEventListener("resize", positionBuyMyCoffeeButton)
