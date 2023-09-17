import './sign.css'

function Sign (){
    return (<div id="sign">
        <h2>SIGN IN</h2>
        <div className='inp'>
            <h5>Username:</h5>
            <input type="text"  placeholder='&nbsp; Enter Name'/>
        </div>
        
        <div className='inp'>
            <h5>Password*:</h5>
            <input type="text" placeholder='&nbsp; Enter Password' />
        </div>

        <div className='inp'>
            <h5>Location*:</h5>
            <input type="text" placeholder='&nbsp; Enter Location(District/State name)'/>
        </div>
    </div>)
}

export default Sign;