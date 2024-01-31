import * as INSTANCE from "./modules/instances.js"
import * as FUNCTION from "./modules/functions.js"
import data from '../molengeek.json' assert { type: "json" }

//HEADER: include logo in header

FUNCTION.logoNav()

//FOOTER: assign social media logos

FUNCTION.socialMedia()

document.querySelectorAll(".my-icon")
      
document.querySelectorAll(".my-icon")[0].src = "../assets/img/facebook.png"

document.querySelectorAll(".my-icon")[1].src = "../assets/img/twitter.png"

document.querySelectorAll(".my-icon")[2].src = "../assets/img/instagram.png"

document.querySelectorAll(".my-icon")[3].src = "../assets/img/linkedin.png"

//FOOTER Logo Molengeek

FUNCTION.logoFooter()

//NAVBAR WITH DROPDOWN

FUNCTION.dropDown()

//BURGER-MENU: on click all my links appear

FUNCTION.myBurger()

//SCROLL-BTN

//Button on scroll//

//creation of variable for my button (called with its id)//

window.onscroll = function() {FUNCTION.scrollFunction()};


//when the user clicks on it, the scroll goes back to top of the page//

INSTANCE.myScrollbutton.addEventListener("click",()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

//CHANGE COLOR BACKGROUND BANNER

let myBanner = document.querySelector(".banner-slogan")

myBanner.style.background = "#984d89"

//HOVER TITLE CHANGE COLOR

FUNCTION.changeColorHeader()