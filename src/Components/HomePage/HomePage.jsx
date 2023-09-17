import React from 'react';
import './homepage.css'
import PIC6 from './images/PIC6.png'

const HomePage = () => {
    return(
        <>
        <div className='header'>
        <nav className='nav'>
             <div className='logo'>
                {/* <img src="#" alt="logo" /> */}
                HYDRO <br /> HORIZON
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
                <button class="btn">SignUp</button>
                <button className='btn'>SignIn</button>
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
       </div>
       {/* temporary */}
       <div> 
        <h1>Hello</h1>
       </div>
        </>
       
       
    );
}

export default HomePage;