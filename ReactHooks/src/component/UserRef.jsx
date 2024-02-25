import {useRef} from "react"

const UserRef = () => {
      let data = useRef()
      let menubar = useRef()
     const Change =()=>{
        data.current.innerText ="Hello UseRef"
        menubar.current.innerHTML ="<ul><li>AA<li/><li>BB<li/><ul/>"

     }

    return (
        <div>
            <p ref ={data}></p>
            <h1 ref={menubar}></h1>
            <button onClick={Change}>Click Me</button>
        </div>
    );
};

export default UserRef;