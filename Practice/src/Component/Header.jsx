
const Header = () => {
    return (
        <div>
            <h3>Local Time</h3>
            <h2>{new Date().getTime()}</h2>
            <button className="mybutton" style={
                { 
                    color:"white",
                    background:"red",
                    padding:"20px",
                    border:"none",
                    borderRadius:"5px"
                }
            } onClick={()=>alert("Learn React js")}>Click me </button>
        </div>
    );
};

export default Header;