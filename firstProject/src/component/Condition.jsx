import React from 'react';
 let marks= 81
const Condition = () => {
    return (
        <div>
        {
            marks >80?<h1>brilient</h1> : <h1>average</h1>
        }
        </div>
    );
};

export default Condition;