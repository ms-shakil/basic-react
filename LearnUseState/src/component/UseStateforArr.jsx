import { useState } from "react";

const UseStateforArr = () => {
    const [name,ChangeName] = useState([])
    const [item,itemChange] =useState("")
    const takeData =(event) =>{
        let data =event.target.value
        item.push(data)
        itemChange([...item])
    } 
    const updateData=()=>{
        name.push(item)
        ChangeName([...name])
    }
    return (
        <div>
              <table>
                 <tbody>
                    {
                        name.length !==0?(
                          name.map((element,i) =>{
                            return(
                                <tr>
                                    <td>{element}</td>
                                </tr>
                            )
                          }) 
                        ):(<tr> <tr/>)
                    }
                 </tbody>
              </table>


            <input type="text" placeholder="Enter something" onChange={takeData} />
            <button onClick={updateData} >submit</button>
        </div>
    );
};

export default UseStateforArr;