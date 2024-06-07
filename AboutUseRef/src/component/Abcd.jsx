import { useRef } from "react";

const Abcd = () => {
    let Myheader = useRef();
    let hader1 =useRef()
   
    const change =()=>{
        Myheader.current.innerHTML="<ul><li>A<li/><li>B<li/><ul/>"
        hader1.innerText ="hello from react"


    }
    return (
        <div>
             <div ref={Myheader}></div>
             <button onClick={change}>clilck me</button>
            <h1 ref={(a)=>hader1=a}></h1>
            
        </div>
    );
};

export default Abcd;