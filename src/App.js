
import './App.css';

import React, {useState} from 'react'

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {




  const [alert, setalert] = useState(null)

  const showAlert = (message, type) =>{

 
      setalert({
        msg: message,
        type: type 
      })  
      setTimeout(() => {
        setalert(null)
      }, 1500);


    
  }
  




const [mode, setmode] = useState('light')

const [toggleText, settoggleText] = useState("Enable Dark Mode")

const [icon, seticon] = useState('sun')





  
const toggleRed = () =>{
 

    setmode('dark')
  
    document.body.style.backgroundColor = "#dc3545"
    document.body.style.color = "white"
    
  
 
} 
const toggleYellow = () =>{
 
 setmode('dark')
    
    document.body.style.backgroundColor = "#ffc107"
    document.body.style.color = "white"
    
  
  
} 
const toggleGreen = () =>{
 

    setmode('dark')
   
    document.body.style.backgroundColor = "#198754"
    document.body.style.color = "white"
    let clr = document.querySelector('nav')
    clr.classList.add('text-light')
  
} 












  const toggleMode = () =>{
    if(mode === 'dark' && icon === 'moon'){
      setmode('light')
      settoggleText("Enable Dark Mode")
      showAlert("Light Mode Enabled", "success")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      seticon('sun')
    }
    else{
      setmode('dark')
      settoggleText("Enable Light Mode")
      showAlert("Dark Mode Enabled", "success")
      document.body.style.backgroundColor = "#0f172a"
      document.body.style.color = "white"
      seticon('moon')
    }
  } 
 


  return (
    <>
    

    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} icon={icon} toggleText={toggleText} toggleMode={toggleMode} toggleRed={toggleRed} toggleYellow={toggleYellow} toggleGreen={toggleGreen}/>
    <Alert alert={alert}/>
    <div className="container">

    <TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode}/>
    </div>









    </>
  );
}

export default App;
