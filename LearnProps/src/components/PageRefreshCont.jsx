
const PageRefreshCont = () => {
    const PostformData =(event)=>{
        event.preventDefault()
        alert("Hello React")
    }
    return (
        <div>
           <form action="" onSubmit={PostformData}>
            <input placeholder="Enter Name:"/>
            <button>Submit</button>
           </form>
        </div>
    );
};

export default PageRefreshCont;