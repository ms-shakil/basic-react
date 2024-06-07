import { useRef } from "react";

const UseAPI = () => {
      let APIData = useRef(null)
      let JsonData =useRef()
      let fetchData = async()=>{
        let response =  await fetch('https://dummyjson.com/products')
        APIData.current = response.json()
      }
      let showData = async()=>{
             JsonData.current.innerText = JSON.stringify(APIData.current)
      }

    return (
        <div>
            <p ref={JsonData}></p>
            <button onClick={fetchData} >Call API</button>
            <button onClick={showData}>Show Data</button>
        </div>
    );
};

export default UseAPI;