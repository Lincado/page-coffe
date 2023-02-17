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
