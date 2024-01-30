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

//ACCORDION 

let accordion = document.querySelectorAll(".accordion");

export function myAccordion(){

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

//assign data from JSON to my accordion

console.log(data.FAQ)

for (let i = 0; i <= 4; i++) {
    // console.log(Object.values(data.FAQ)[i])  
}

