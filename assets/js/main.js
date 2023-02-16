const p = document.querySelector(".inner-p")
p.innerText = "<Great Code/>"

const btnMenuMobile = document.querySelector("#btn-menu-mobile")

function toggleMenu (event) {
    
    const nav = document.getElementById("nav")
    nav.classList.toggle("active")

}

btnMenuMobile.addEventListener("click", toggleMenu)