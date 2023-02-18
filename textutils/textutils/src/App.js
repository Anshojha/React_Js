import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";

import {BrowserRouter as Router , Route , Switch , Link} from 'react-router-dom';

function App() {

  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) => {
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('dark mode is enabled ' , 'sucess');
      document.title = 'TextUtils-Dark'
    }
    else{
      setMode('light') ;
      document.body.style.backgroundColor = 'white';
      showAlert('light mode enabled ' , ' sucess');
      document.title = 'TextUtils-Light'
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode ={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
      <div className="container my-3">
        <TextForm  heading = "Enter the text here to analyze" mode ={mode} />
        <About/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
