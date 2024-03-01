import { useState } from "react"
import UseStateforObj from "./component/UseStateforObj"


function App() {
  let [number,updateNumber] =useState(0)
  const Change =()=>{
    updateNumber(number++)
  }
  return (
    <>
     <h1>Learn React Use State</h1>
     <h4>number: {number}</h4>
     <button onClick={Change}>click me</button>

     <h1>use object in useState</h1>
    
    <UseStateforObj/>
    


    </>
  )
}

export default App
