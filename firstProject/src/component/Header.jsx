import React from 'react';

const Header = () => {
    return (
        <div>
            <h1 style ={
                {
                    color:"red"
                }
            }>Learn react js</h1>
            <label htmlFor="">Your Name </label>
           <input type="text" placeholder='Enter your name' />
           <button>Submit</button>
        </div>
    );
};

export default Header;