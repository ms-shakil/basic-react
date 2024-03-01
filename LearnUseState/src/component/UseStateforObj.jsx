import { useState } from "react"

const UseStateforObj = () => {
    const [myObj, updatObj] = useState({
        key1:"value1",
        key2:"value2",
        key3:"value3",
    })
    const ChangeObj=() =>{
      updatObj({
        key1:"New value1",
        key2:"new value2",
        key3:"new value3",
      })

    // //   if we want singal or more data change than use this mathods
    //      updatObj (
    //         preObj =>({
    //             ...preObj,
    //             key1:"change with sprit operator",
    //             key2:"value2222222222222"
    //         })
    //      )
    }
    return (
        <div>
            <h1 >{myObj.key1}</h1>
            <button onClick={ChangeObj}>Click for change</button>
        </div>
    );
};

export default UseStateforObj;