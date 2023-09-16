import logo from './logo.svg';
import './App.css';
import React, {useState , useEffect} from 'react';
import { ThreeDots } from  'react-loader-spinner'


function App() {
  //code for the splash screen
  const [loading, setloading] = useState(false);
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },6000)
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
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      }
      
    </div>
  );
}

export default App;
