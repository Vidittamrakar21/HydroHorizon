import './sign.css'
import { useState } from 'react';

function Sign (){
    const [iscross, crossit] = useState(false);
    const cross = () => {
        crossit(true);
    }
    return (
        <div>
            {!iscross?<div id="sign">
        <div id="cross" onClick={cross}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        </div>
        <h2>SIGN UP</h2>
        <div className='inp'>
            <h5>Username:</h5>
            <input type="text"  placeholder='&nbsp; Enter Name'/>
        </div>
        
        <div className='inp'>
            <h5>Password*:</h5>
            <input type="text" placeholder='&nbsp; Enter Password' />
        </div>

        <div className='inp'>
            <h5 id='con'>Confirm Password*:</h5>
            <input type="text" placeholder='&nbsp; Confirm Password' />
        </div>

        <div className='inp'>
            <h5>Location*:</h5>
            <input type="text" placeholder='&nbsp; Enter Location(District/State name)'/>
        </div>
        <button id='submit'>Submit</button>
    </div>: ""}
        </div>
    )
}

export default Sign;