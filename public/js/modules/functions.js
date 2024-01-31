import * as INSTANCE from "./instances.js"
import data from '../../molengeek.json' assert { type: "json" }


//when the scroll is more than 20px from the top of the site, the button will disappear//
export function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      INSTANCE.myScrollbutton.style.display = "block";
    } else {
      INSTANCE.myScrollbutton.style.display = "none";
    }
  }

//FOOTER: social media and logo

//FOOTER Logo Molengeek

export function logoFooter(){
    document.querySelector(".footer-logo").src = data.molengeekLogo
}

//Social Media

export function socialMedia(){

  let newLink

  let newImg

    Object.values(data.reseauxSociaux).forEach(element => {

        newLink = document.createElement("a")
      
        newLink.href = element
      
        newImg = document.createElement("img")
      
        newImg.setAttribute("class","my-icon")
      
        newLink.appendChild(newImg)
      
        document.querySelector(".upper-footer").appendChild(newLink)
      
      });
}

//add MolenGeek logo to my Navbar

export function logoNav(){
    document.querySelector(".logo-img").src = data.molengeekLogo
}

//Navbar with drop-down


export function dropDown(){

    INSTANCE.btnDropDown.addEventListener("click",()=>{
        INSTANCE.myDropDown.classList.toggle("show");
        console.log(INSTANCE.myDropDown)
      })

}

//Navbar Burger-Menu

//BURGER-MENU: on click all my links appear

export function myBurger(){
    INSTANCE.myBurger.addEventListener("click",()=>{
        INSTANCE.allMyLinks.classList.toggle("hide")
        console.log("hi")
      })
}

//PAGE COURSES

//assign data from JSON to my accordion

export function myAccordionAssign(){

  let newButton

  let newPButton

  let newPanel

  let newPPanel

  for (let i = 0; i <= Object.values(data.FAQ).length-1; i++) {
  
    if (i % 2 == 0) {
      
      newButton = document.createElement("button")
  
      newPButton = document.createElement("p")
  
      newButton.setAttribute("class","accordion")
  
      newButton.appendChild(newPButton)
        
      newPButton.innerText = Object.values(data.FAQ)[i]

      document.querySelector(".my-accordion-container").appendChild(newButton)

        
  } else {
  
      newPanel = document.createElement("div")
  
      newPanel.setAttribute("class","panel")
  
      newPPanel = document.createElement("p")
  
      newPPanel.innerText = Object.values(data.FAQ)[i]
  
      newPanel.appendChild(newPPanel)
  
      document.querySelector(".my-accordion-container").appendChild(newPanel)
  
  }
  }
}

//assign short course info to my panels of my accordion


export function myAccordionShorts(){

  let newLiShorts

let firstPanelShorts = document.querySelector("#firstPanel").querySelector("ul")

let secondPanelShorts = document.querySelector("#secondPanel").querySelector("ul")

let thirdPanelShorts = document.querySelector("#thirdPanel").querySelector("ul")

let fourthPanelShorts = document.querySelector("#fourthPanel").querySelector("ul")

let fifthPanelShorts = document.querySelector("#fifthPanel").querySelector("ul")

let sixthPanelShorts = document.querySelector("#sixthPanel").querySelector("ul")

  for (let i = 0; i <= Object.values(data.formations)[1].length-1; i++) {
  
    if (Object.values(data.formations)[1][i].pack == "Pack Web" || Object.values(data.formations)[1][i].pack == "Pack Web - Coding" || Object.values(data.formations)[1][i].pack == "Pack Coding") {
      
      newLiShorts = document.createElement("li")

      newLiShorts.innerText = Object.values(data.formations)[1][i].nom

      firstPanelShorts.appendChild(newLiShorts)
        
  } else if (Object.values(data.formations)[1][i].pack == "Pack Design" || Object.values(data.formations)[1][i].pack == "Pack Design - Content creator"){
  
    newLiShorts = document.createElement("li")

    newLiShorts.innerText = Object.values(data.formations)[1][i].nom

    secondPanelShorts.appendChild(newLiShorts)
  
  } else if (Object.values(data.formations)[1][i].pack == "Pack audiovisuel - Content creator" || Object.values(data.formations)[1][i].pack == "Pack audiovisuel"){
  
    newLiShorts = document.createElement("li")

    newLiShorts.innerText = Object.values(data.formations)[1][i].nom

    thirdPanelShorts.appendChild(newLiShorts)
  } else if (Object.values(data.formations)[1][i].pack == "Pack E-commerce - Entrepreneur"){
  
    newLiShorts = document.createElement("li")

    newLiShorts.innerText = Object.values(data.formations)[1][i].nom

    fourthPanelShorts.appendChild(newLiShorts)
  } else if (Object.values(data.formations)[1][i].pack == "Pack Entrepreneur - Web"){
  
    newLiShorts = document.createElement("li")

    newLiShorts.innerText = Object.values(data.formations)[1][i].nom

    fifthPanelShorts.appendChild(newLiShorts)
  } else if (Object.values(data.formations)[1][i].pack == "Pack Content creator - Entrepreneur - Ecommerce"){
  
    newLiShorts = document.createElement("li")

    newLiShorts.innerText = Object.values(data.formations)[1][i].nom

    sixthPanelShorts.appendChild(newLiShorts)
  }
}
}

//ACCORDION FAQ: click on my btns to show text below

export function myAccordion(){

  let accordion = document.querySelectorAll(".accordion");

    for (let i = 0; i < accordion.length; i++) {

        accordion[i].addEventListener("click", function() {
      
          //Toggle between hiding and showing the panel
          let  panel = this.nextElementSibling;
      
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }
}

//ACCORDION SHORT COURSE: click on my btns to show text below

export function accordionShorts(){

  let accordionShorts = document.querySelectorAll(".accordion-shorts");

    for (let i = 0; i < accordionShorts.length; i++) {

        accordionShorts[i].addEventListener("click", function() {
      
          //Toggle between hiding and showing the panel
          let  panel = this.nextElementSibling;
      
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }
}

//SELECT COURSES DISPLAY


export function displayCourses(){

  let sectionLongCourses = document.querySelector(".details-courses")

  let sectionShortCourses = document.querySelector(".courses-short")

  let btnLongCourses = document.querySelector(".btn-course-one")

  let btnShortCourses = document.querySelector(".btn-course-two")

  btnLongCourses.addEventListener("click",()=>{
    sectionShortCourses.classList.add("hide")
    sectionLongCourses.classList.remove("hide")
    document.querySelector(".header-following-section").querySelector("h1").innerText = "LONG COURSES"
  })

  btnShortCourses.addEventListener("click",()=>{
    sectionShortCourses.classList.remove("hide")
    sectionLongCourses.classList.add("hide")
    document.querySelector(".header-following-section").querySelector("h1").innerText = "SHORT COURSES"
  })

}

//EVENTS: ASSIGN ALL THE DATES AND THE NAME OF EVENT TO RESPECTIVE BAR

export function assignEventDates(){

  let allEventNames = document.querySelectorAll(".bar")

let allEventsDates = document.querySelectorAll(".date")


for (let i = 0; i < data.formations.seancesInfos.length; i++) {

  allEventNames[i].querySelector("p").innerText = data.formations.seancesInfos[i].nom

  allEventsDates[i].querySelector("p").innerText = data.formations.seancesInfos[i].date
  
}

}

//CREATE JOB BOXES

export function assignJobs(){
  
  data.jobs.forEach(element => {
  
    let newJobBox = document.createElement("div")
  
    newJobBox.setAttribute("class","col-3")
  
    let newPJob = document.createElement("p")
  
    let newH1Job = document.createElement("h1")
  
    newPJob.innerText = element.description
  
    newH1Job.innerText = element.poste
  
    newJobBox.appendChild(newH1Job)
  
    newJobBox.appendChild(newPJob)
  
    document.querySelector(".all-my-descriptions").appendChild(newJobBox)
  
  });
  
  
  

}
