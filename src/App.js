import logo from './logo.svg';
import './App.css';
import React, {useState , useEffect} from 'react';
import { ThreeDots } from  'react-loader-spinner';
import HomePage from './Components/HomePage/HomePage';
import { MutatingDots  } from  'react-loader-spinner'
// import Login from './components/login/login';
// import Sign from './components/sign/sign';



function App() {
  //code for the splash screen
  const [loading, setloading] = useState(false);
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },3000)
  },[])

  return (
    <div className="App">
      {
        loading?
        <div id='loader'>
             <div id='photo'>
              <img src="/images/sihlogo.png" alt="" />
             </div>
             <div id='dots'>
             <MutatingDots 
               height="100"
               width="100"
               color="#279EFF"
               secondaryColor= '#279EFF'
               radius='12.5'
               ariaLabel="mutating-dots-loading"
               wrapperStyle={{}}
               wrapperClass=""
               visible={true}
               />
             </div>
        </div>
        :
        //from here all the webpage part will render

        <HomePage />

      // <div id='home'>
      //  <Login></Login>
      //  <Sign></Sign>
      // </div>

      }
      
    </div>
  );
}

export default App;
