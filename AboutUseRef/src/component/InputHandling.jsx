import { useRef } from "react";

const InputHandling = () => {
    let FirstName,LastName = useRef()
    let ShowData =()=>{
       let fname = FirstName.value
       let lname =LastName.value
       alert(fname+" "+lname)
    }
    return (
        <div>
             <h1>Handle user input</h1>
             <input ref={(a)=>FirstName =a} placeholder="Enter 1st name"/> <br/> 
             <input ref={(a)=> LastName =a} placeholder="Enter 1st name"/> <br/>
             <button onClick={ShowData}>Click </button>

        </div>
    );
};

export default InputHandling;