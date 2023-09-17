import logo from './logo.svg';
import './App.css';
import React, {useState , useEffect} from 'react';
import { ThreeDots } from  'react-loader-spinner';
import HomePage from './Components/HomePage/HomePage';


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
              <ThreeDots id = 'dots'
                height="80" 
                width="80" 
                radius="9"
                color="#793FDF" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                  />
             </div>
        </div>
        :
        //from here all the webpage part will render
        <HomePage />
      }
      
    </div>
  );
}

export default App;
