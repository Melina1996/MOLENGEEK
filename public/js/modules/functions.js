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

export let newLink

export let newImg

export function socialMedia(){
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

let newButton

let newPButton

let newPanel

let newPPanel

export function myAccordionAssign(){

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

//ACCORDION 


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



