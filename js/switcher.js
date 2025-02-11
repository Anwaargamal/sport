/*toggler style       
const styleswitcherToggle = document.querySelector(".style-switcher-toggler");
styleswitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})*/


// light and dark
const dayNight =document.querySelector(".day-night");
window.addEventListener("load",() => {
    if(document.body.classList.contains(".dark"))
    {
        dayNight.querySelector("i").classList.contains.add("fa-sharp fa-solid fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fas fa-moon");
    }
})
