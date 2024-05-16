import './App.css';
import Navbar from './MyComponents/Navbar';
import TextArea from './MyComponents/TextArea';
import React, { useState } from 'react';
import Alerts from './MyComponents/alerts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './MyComponents/About';


function App() {
  const [MyStyle, setMyStyle] = useState({
    color : 'Black',
    backgroundColor : 'white',
    // border : '2px solid black'
  });
  const [Label,setLabel] = useState("Enable Dark Mode");
  const Dark = () =>{
    if( MyStyle.backgroundColor === 'white'){
      setMyStyle({
        color : 'white',
        backgroundColor : 'Black',
      })
      setLabel("Enable Light Mode");
      document.body.style.backgroundColor = 'Black';
      // showAlert('Dark Mode is enabled','success');
    }
    else{
      setMyStyle({
        color : 'Black',
        backgroundColor : 'white',
      })
      setLabel("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      // showAlert('Light Mode is enabled','success');
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type

    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
     <Router>
      <Navbar title='Text Analyzer' MyStyle={MyStyle} Label={Label} Dark={Dark} />
      <Alerts alert={alert} />
      <Routes>
        <Route path="/TextAnalyzer" element={<TextArea MyStyle={MyStyle} showalert={showAlert} />} />
        <Route path="/about" element={<About MyStyle={MyStyle} />} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
