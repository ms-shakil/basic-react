import { useState } from "react"
import UseStateforObj from "./component/UseStateforObj"
import UseStateforArr from "./component/UseStateforArr";


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

    <h1>use state works in aray </h1>

    <UseStateforArr/>
    


    </>
  )
}

export default App
