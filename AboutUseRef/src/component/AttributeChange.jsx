import { useRef } from "react";

const AttributeChange = () => {
    let myImg =useRef()
    let change =()=>{
        myImg.current.src="https://placehold.co/600x400.png"
        myImg.current.setAttribute("height","525px")
        myImg.current.setAttribute("width","550px")
    }
       
    return (
        <div>
            <img ref={myImg} src="https://placehold.co/600x400"/>
            <button onClick={change}>Change image</button>
        </div>
    );
};

export default AttributeChange;