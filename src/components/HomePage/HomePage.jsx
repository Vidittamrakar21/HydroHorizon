import React from 'react';
import './homepage.css'
import PIC6 from './images/PIC6.png'
import Login from '../login/login'
import Sign from '../sign/sign'
import { useState } from 'react';

const HomePage = () => {
    const [view, setview] = useState(false);
    const [sigview, siop] = useState(false);
    
    const login = () =>{
        setview(true);
        siop(false);
    }

    const sign = () =>{
        siop(true);
        setview(false);
    }
    return(
        <>
        <div className='header'>
        <nav className='nav'>
             <div className='logo'>
                {/* <img src="#" alt="logo" /> */}
                HYDRO HORIZON
             </div>
             <div className='nav-item'>
                <ul className='itemlist'>
                    <li><a href='#'>Suitability</a></li>
                    <li><a href="#">Depth</a></li>
                    <li><a href="#">Discharge</a></li>
                    <li><a href="#">Technique</a></li>
                    <li><a href="#">Comprehensive</a></li>
                </ul>
                {/* <button className='btn'>Login</button> */}
                <button className="btn" onClick={sign}>SignUp</button>
                <button className='btn'onClick={login} >LogIn</button>
             </div>
        </nav>
        <div className='search-content'>
            <h1>Way To Water</h1>
            <p>Enter Your Location Here</p>
            <div className='location'>
                <input type='text' id="district" name='district' placeholder='District'/>
                <input type='text' id="state" name='state' placeholder='State'/>
            </div> 
            <button className='btn btn1'>Submit</button>
        </div>
        {
            view ?  <Login></Login> : ""
        }

        {
            sigview ?  <Sign></Sign> : ""
        }

       

           
       </div>
       {/* temporary */}
      
        </>
       
       
    );
}

export default HomePage;