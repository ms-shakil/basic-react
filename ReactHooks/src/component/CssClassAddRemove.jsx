import { useRef } from "react";
import "./style.css"

const CssClassAddRemove = () => {
    let MyHeader = useRef()
    let number = useRef(0)
    const Change =()=>{
        MyHeader.current.classList.remove("ClassGreen")
        MyHeader.current.classList.add("ClassRed")
        number.current ++
        console.log(number.current)
    }
    return (
        <div>
            <div></div>
            <h1 className="ClassGreen" ref={MyHeader}>How to remove/Add CSS Class.</h1>
            <button onClick={Change}>Change Colour</button>
        </div>
    );
};

export default CssClassAddRemove;