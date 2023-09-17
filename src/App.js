import logo from './logo.svg';
import './App.css';
import React, {useState , useEffect} from 'react';
import { MutatingDots  } from  'react-loader-spinner'
import HomePage from './components/HomePage/HomePage';
import Down from './components/downpage/down';
import Footer from './components/footer/footer';
// import Login from './components/login/login';
// import Sign from './components/sign/sign';


function App() {
  //code for the splash screen
  const [loading, setloading] = useState(false);
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },4000)
  },[])

  return (
    <div className="App">
      {
        loading?
        <div id='loader'>
             <div id='photo'>
              <img src="/images/hlogo.jpg" alt="" />
             </div>
             <h1>Hydro Horizon</h1>
             <div id='dots'>
             <div id="mut">
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
        </div>
        :
        //from here all the webpage part will render
      <div id='home'>
       {/* <Login></Login>
       <Sign></Sign> */}

       <HomePage></HomePage>
       <Down></Down>
       <Footer></Footer>
      </div>
      }
      
    </div>
  );
}

export default App;
