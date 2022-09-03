import React from "react"
import { useState } from "react"
import * as math from "mathjs";
import "./App.css"
import Toggle from "./Toggle.js"



function App() {
  const [result, setResult] = useState("")

  const handleClick = e => {
    setResult(result.concat(e.target.name))
  }

  const del = () => {
    setResult(result.slice(0, -1))
  }
  const reset = () => {
    setResult("")

  }

  const equal = () => {
  

    setResult(math.evaluate(result).toString());
    console.log(result)
  }

  
  return (
    <div className="container">
      <header className="header">
        <p className="theme-calc">calc</p>
        <div className="theme">
          <div className="toggle-number">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <Toggle />
        </div>
      </header>
      <form className="form-control">
        <input type="text" defaultValue={result} />
      </form>
      <div className="container-calc">
        <div className="digit-calc">
          <button className="btn" name="7" onClick={handleClick}>
            7
          </button>
          <button className="btn" name="8" onClick={handleClick}>
            8
          </button>
          <button className="btn" name="9" onClick={handleClick}>
            9
          </button>
          <button className="btn del" onClick={del}>
            del
          </button>
          <button className="btn" name="4" onClick={handleClick}>
            4
          </button>
          <button className="btn" name="5" onClick={handleClick}>
            5
          </button>
          <button className="btn" name="6" onClick={handleClick}>
            6
          </button>
          <button className="btn" name="&#43;" onClick={handleClick}>
            &#43;
          </button>
          <button className="btn" name="1" onClick={handleClick}>
            1
          </button>
          <button className="btn" name="2" onClick={handleClick}>
            2
          </button>
          <button className="btn" name="3" onClick={handleClick}>
            3
          </button>
          <button className="btn" name="&#8722;" onClick={handleClick}>
            &#8722;
          </button>
          <button className="btn" name="." onClick={handleClick}>
            &#8901;
          </button>
          <button className="btn" name="0" onClick={handleClick}>
            0
          </button>
          <button className="btn" name="/" onClick={handleClick}>
            &#8725;
          </button>
          <button className="btn" name="*" onClick={handleClick}>
            &times;
          </button>
          <button className="btn reset" onClick={reset}>
            reset
          </button>
          <button className="btn equal" name="&#61;" onClick={equal}>
            &#61;
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
