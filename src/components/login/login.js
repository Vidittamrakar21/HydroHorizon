import './login.css'

function Login (){
    return (<div id="login">
        <h2>LOGIN</h2>
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

export default Login;