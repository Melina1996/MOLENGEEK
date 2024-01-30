import * as INSTANCE from "./modules/instances.js"
import * as FUNCTION from "./modules/functions.js"
import data from '../molengeek.json' assert { type: "json" }



//BURGER-MENU: on click all my links appear

INSTANCE.myBurger.addEventListener("click",()=>{
  INSTANCE.allMyLinks.classList.toggle("hide")
})

//add MolenGeek logo to my Navbar

document.querySelector(".logo-img").src = data.molengeekLogo

//CAROUSEL: create an "li" for each of my slides, based on JSON

let newImg

let newLi

let newUl = document.createElement("ul")

INSTANCE.myCarousel.appendChild(newUl)

Object.values(data.partenaires).forEach(element => {

  newImg = document.createElement("img")

  newImg.src = element.logo

  newLi = document.createElement("li")

  newLi.setAttribute("class","slide")

  newLi.appendChild(newImg)

  newUl.appendChild(newLi)

});

let allSlides = document.querySelectorAll(".slide")

allSlides[0].setAttribute("data-active","")

newUl.setAttribute("data-slides","")


let carouselBtns = document.querySelectorAll("[data-carousel-button]")

carouselBtns.forEach(element => {
  element.addEventListener("click",()=>{
    let offset = element.dataset.carouselButton === "next" ? 1 : -1
    console.log(offset)
    let mySlides = element.closest("[data-carousel]").querySelector("[data-slides]")
    let activeSlide = document.querySelector("[data-active]")
    //create Array with the children of all of my slides and get index of my active one
    let newIndex = [...mySlides.children].indexOf(activeSlide) + offset
    if(newIndex < 0){
      newIndex = mySlides.children.length -1 //back to last slide
    }

    if(newIndex >= mySlides.children.length){
      newIndex = 0 //back to 1. slide 
    }

    //add active-slide property to new slide
    mySlides.children[newIndex].dataset.active = true

    //remove it from the old one
    delete activeSlide.dataset.active
  })
});

//Address

let pAddress = document.createElement("p")

pAddress.innerText = data.molengeekInfo.address

document.querySelector(".my-address").appendChild(pAddress)

let pMail = document.createElement("p")

pMail.innerText = data.molengeekInfo.email

document.querySelector(".e-mail-phone").appendChild(pMail)

let pPhone = document.createElement("p")

pPhone.innerText = data.molengeekInfo.phone

document.querySelector(".e-mail-phone").appendChild(pPhone)

//Social Media

let newLink

Object.values(data.reseauxSociaux).forEach(element => {

  newLink = document.createElement("a")

  newLink.href = element

  newImg = document.createElement("img")

  newImg.setAttribute("class","my-icon")

  newLink.appendChild(newImg)

  document.querySelector(".footer-part-three").appendChild(newLink)

});

document.querySelectorAll(".my-icon")

document.querySelectorAll(".my-icon")[0].src = "./public/assets/img/facebook.png"

document.querySelectorAll(".my-icon")[1].src = "./public/assets/img/twitter.png"

document.querySelectorAll(".my-icon")[2].src = "./public/assets/img/instagram.png"

document.querySelectorAll(".my-icon")[3].src = "./public/assets/img/linkedIn.png"

//SCROLL-BTN

//Button on scroll//

//creation of variable for my button (called with its id)//


window.onscroll = function() {FUNCTION.scrollFunction()};


//when the user clicks on it, the scroll goes back to top of the page//

INSTANCE.myScrollbutton.addEventListener("click",()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
