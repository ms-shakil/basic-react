import { useRef } from "react";

const CssHandle = () => {
 let UniName =useRef()
 let number =0
 let change =()=>{
    UniName.classList.remove("text-success")
    UniName.classList.add("text-danger")
 }
 let Incrase =()=>{
    number ++
    console.log(number)
    
 }
    return (
        <div>
             <h1 className="text-success" ref={(a)=>UniName =a}>United InterNational University</h1>
             <button onClick={change} >Change Color</button>
            
             <button onClick={Incrase}>Add</button>
        </div>
    );
};

export default CssHandle;