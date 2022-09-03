import React  from "react"
import "./App.css"
const body = document.querySelector("body")

function Toggle() {
 
  const handleThemeOne = () => {
  
    body.classList.add("theme-one")
    body.classList.remove("theme-two")
    body.classList.remove("theme-three")
    document.getElementById("one").style.opacity = "1"
    document.getElementById("two").style.opacity = "0"
    document.getElementById("three").style.opacity = "0"
  }

  
  const handleThemeTwo = () => {
    
    body.classList.add("theme-two")
    body.classList.remove("theme-three")
    body.classList.remove("theme-one")
    document.getElementById("one").style.opacity = "0"
    document.getElementById("two").style.opacity = "1"
    document.getElementById("three").style.opacity = "0"
  }
  
  const handleThemeThree = () => {
   
    body.classList.add("theme-three")
    body.classList.remove("theme-one")
    body.classList.remove("theme-two")
    document.getElementById("one").style.opacity = "0"
    document.getElementById("two").style.opacity = "0"
    document.getElementById("three").style.opacity = "1"
  }
  return (
    <div className="theme-toggle">
      <span>theme</span>
      <div className="three-state-toggle">
        <input className="button" type="radio" name="toggle" id="one" onChange={handleThemeOne} />
        <input className="button" type="radio" name="toggle" id="two" onChange={handleThemeTwo} />
        <input className="button" type="radio" name="toggle" id="three" onChange={handleThemeThree} />
      </div>
    </div>
  )
}

export default Toggle
