import { useRef } from "react";

const CashingExpensiveCompution = () => { 
     let Data = useRef(null)
     let DataTag = useRef()
     
     const callApi = async ()=>{
       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
       Data.current = await response.json()
     }
    
     const showData =()=>{
         DataTag.current.innerText =JSON.stringify(Data.current)
     }

    return (
        <div>
            <h1>How to call api and show Data in Cashing Expensive Compultion</h1>
            <p ref={DataTag} ></p>
            <button onClick={callApi}>Call Api</button>
            <button onClick={showData}>Show Data</button>
        </div>
    );
};

export default CashingExpensiveCompution;