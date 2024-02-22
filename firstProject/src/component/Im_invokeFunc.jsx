import React from 'react';

const Im_invokeFunc = () => {
    let marks =70 // immedite inovation functon 
    return (
        <div>

            {
             ( ()=>{
                 if(marks >79){
                    return <h1>A+</h1>
                 }
                 else if(marks >60){
                    return <h1>A-</h1>
                 }
                 else{
                    return <h1>Fail</h1>
                 }

                }

             ) ()}
        </div>
    );
};

export default Im_invokeFunc;