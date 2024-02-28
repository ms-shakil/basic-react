import { useRef } from "react";

const ChangeAttributeUseref = () => {
    let MyImg = useRef()
    let FirstName, LastName =useRef()

    const Change =()=>{
        MyImg.current.src ="https://placehold.co/600x400/000000/FFF"
        MyImg.current.setAttribute("height","200px")
        MyImg.current.setAttribute("width","200px")
    }
    const ClickBtn =()=>{
        let Fname = FirstName.value
        let LName = LastName.value
        alert(Fname+" "+LName)
    }
    return (
        <div>
             <img ref={MyImg} src="https://placehold.co/600x400.png" alt="" />

             <button onClick={Change} >Change Image</button>

            <div></div>
            <br />
            <label htmlFor="">FirstName:</label>
            <input ref={(a)=>FirstName =a} placeholder="First Name" /> <br />
            <label htmlFor="">LastName:</label>
            <input ref={(a)=>LastName=a} placeholder="Last Name" /> <br />
            <button onClick={ClickBtn} >Show User Input</button>

        </div>
    );
};

export default ChangeAttributeUseref;