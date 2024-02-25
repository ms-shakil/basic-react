
const ClickEventManage = () => {
    const Demo =() =>{
        alert("this event works after click button")
    }
    const PostFromData =(event) =>{
       event.preventDefault() // for preventDefault page can't reload
       alert("Im from  From section")
    }
    return (
        <div>
             <h1>Responding to Events</h1>
            <h3>Click Event Manage</h3> 
            {/* <button onClick={alert("Etha load hobar sthe sthe action hoye jabe")}>Click</button> */}

            <button onClick={Demo} >Cleck Me</button>
         <form  onSubmit={PostFromData}>
            <label htmlFor="">FirstName:</label>
            <input type="text" />
            <button type="submit">Submit</button>
         </form>
        </div>
    );
};

export default ClickEventManage;