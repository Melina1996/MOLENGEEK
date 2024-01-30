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

//ACCORDION

FUNCTION.myAccordionAssign()

FUNCTION.myAccordion()

//DETAILS-COURSES

let newDivCourse 

let newH2

for (let i = 0; i < Object.values(data.formations.formationsLongues).length; i++) {

  newDivCourse = document.createElement("div")

  newDivCourse.setAttribute("class","my-div-course")

  newDivCourse.classList.add("col")

  newH2 = document.createElement("h2")

  newH2.innerText = Object.values(data.formations.formationsLongues)[i].nom.toUpperCase()

  newDivCourse.appendChild(newH2)

  document.querySelector(".our-courses-boxes").appendChild(newDivCourse)
  
}

//DETAILS ON COURSES

let allDivsCourses = document.querySelectorAll(".my-div-course")

let containerDivsCourses = document.querySelector(".details-courses-container")

let sectionMoreDetails = document.querySelector(".container-more-details")

let btnCloseDetails = document.querySelector(".btn-close-details")

let nameCourse = document.querySelector(".name-course").querySelector("h1")

let description = document.querySelector(".description").querySelector("p")

let duration = document.querySelector(".duration").querySelector("p")

let requirements = document.querySelector(".requirements").querySelector("p")


let liOne = document.querySelector(".liOne")

let liTwo = document.querySelector(".liTwo")

let liThree = document.querySelector(".liThree")

let liFour = document.querySelector(".liFour")


allDivsCourses.forEach(element => {
    element.addEventListener("click",()=>{
      containerDivsCourses.classList.add("hide")
      sectionMoreDetails.classList.add("show")


      if(element.querySelector("h2").innerText == "CODING SCHOOL"){
        nameCourse.innerText = Object.values(data.formations.formationsLongues)[0].nom
        description.innerText = Object.values(data.formations.formationsLongues)[0].descriptif
        duration.innerText = Object.values(data.formations.formationsLongues)[0].duree

        liOne.innerText = Object.values(data.formations.formationsLongues)[0].condition.ageMax

        liTwo.innerText = Object.values(data.formations.formationsLongues)[0].condition.horaire

        liThree.innerText = Object.values(data.formations.formationsLongues)[0].condition.prix

        liFour.innerText = Object.values(data.formations.formationsLongues)[0].condition.situation


      } else if(element.querySelector("h2").innerText == "MARKETING DIGITAL"){
        nameCourse.innerText = Object.values(data.formations.formationsLongues)[1].nom
        description.innerText = Object.values(data.formations.formationsLongues)[1].descriptif
        duration.innerText = Object.values(data.formations.formationsLongues)[1].duree

        liOne.innerText = Object.values(data.formations.formationsLongues)[1].condition.ageMax

        liTwo.innerText = Object.values(data.formations.formationsLongues)[1].condition.horaire

        liThree.innerText = Object.values(data.formations.formationsLongues)[1].condition.prix

        liFour.innerText = Object.values(data.formations.formationsLongues)[1].condition.situation

      } else if(element.querySelector("h2").innerText == "WEBMASTER 360"){
        nameCourse.innerText = Object.values(data.formations.formationsLongues)[2].nom
        description.innerText = Object.values(data.formations.formationsLongues)[2].descriptif
        duration.innerText = Object.values(data.formations.formationsLongues)[2].duree

        liOne.innerText = Object.values(data.formations.formationsLongues)[2].condition.ageMax

        liTwo.innerText = Object.values(data.formations.formationsLongues)[2].condition.horaire

        liThree.innerText = Object.values(data.formations.formationsLongues)[2].condition.prix

        liFour.innerText = Object.values(data.formations.formationsLongues)[2].condition.situation

      } else if(element.querySelector("h2").innerText == "AWS RE/START"){
        nameCourse.innerText = Object.values(data.formations.formationsLongues)[3].nom
        description.innerText = Object.values(data.formations.formationsLongues)[3].descriptif
        duration.innerText = Object.values(data.formations.formationsLongues)[3].duree

        liOne.innerText = Object.values(data.formations.formationsLongues)[3].condition.ageMax

        liTwo.innerText = Object.values(data.formations.formationsLongues)[3].condition.horaire

        liThree.innerText = Object.values(data.formations.formationsLongues)[3].condition.prix

        liFour.innerText = Object.values(data.formations.formationsLongues)[3].condition.situation

      } else if(element.querySelector("h2").innerText == "SALESFORCE ADMINISTRATEUR"){
        nameCourse.innerText = Object.values(data.formations.formationsLongues)[4].nom
        description.innerText = Object.values(data.formations.formationsLongues)[4].descriptif
        duration.innerText = Object.values(data.formations.formationsLongues)[4].duree

        liOne.innerText = Object.values(data.formations.formationsLongues)[4].condition.ageMax

        liTwo.innerText = Object.values(data.formations.formationsLongues)[4].condition.horaire

        liThree.innerText = Object.values(data.formations.formationsLongues)[4].condition.prix

        liFour.innerText = Object.values(data.formations.formationsLongues)[4].condition.situation
      }


    })
});

btnCloseDetails.addEventListener("click",()=>{
  containerDivsCourses.classList.remove("hide")
  sectionMoreDetails.classList.remove("show")
})

