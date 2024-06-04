const LoginStatusBtn = (status)=>{
      if(status){
        return <button>Logout Btn</button>
      }else{
          return <button>Login Btn</button>
      }
}

const ConRan = () => {
    return (
            <div>
             <h1>Login Status</h1>
             {LoginStatusBtn(true)}
             </div>
    );
};
 export default ConRan;
// const ConRan = () => {
//       const status = true
//       if(status == true){
//         return (
//             <div>
//                 <h1>Loging status</h1>
//                 <button>Log out</button>
//             </div>
//         );
//       }else{
//         return (
//             <div>
//                 <h1>Login Status</h1>
//                 <button>Log in</button>
//             </div>
//         );
//       }
// };

// export default ConRan;