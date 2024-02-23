

const MyFun =(status) =>{
    if(status){
        return <button>LOGIN</button>
    }
    else{
        return <button>LOGOUT</button>

    }
}

const ConditionalRendaring = () => {
    return (
        <div> 
            <h1>Login Status</h1>
            { MyFun(false)}
        </div>
    );
};

export default ConditionalRendaring;