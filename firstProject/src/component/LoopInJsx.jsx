import React from 'react';
let data = ["Home","About","Service","Contract"]
const LoopInJsx = () => {
    return (
        <div>
            <ol>
                {
                    data.map((item,i)=>{
                     return <li key={i.toString()}>{item}</li>
                    })
                }
            </ol>
        </div>
    );
};

export default LoopInJsx;