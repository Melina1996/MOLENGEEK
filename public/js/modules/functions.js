import * as INSTANCE from "./instances.js"

//when the scroll is more than 20px from the top of the site, the button will disappear//
export function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      INSTANCE.myScrollbutton.style.display = "block";
    } else {
      INSTANCE.myScrollbutton.style.display = "none";
    }
  }