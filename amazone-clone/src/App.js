import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import firebase from 'firebase/compat/app';
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import 'firebase/compat/auth';
import { useStateValue } from "./StateProvider";
function App() {
 const [{}, dispatch] = useStateValue();

  const auth = firebase.auth();
  useEffect(()=>{  // it runs when the App.js component loads
      auth.onAuthStateChanged(authUser=>{
        console.log("The AuthUser is " , authUser);
        if(authUser){
          // The user logged just logged in or was logged in
          dispatch({
            type : 'SET_USER',
            user : authUser
          })
        }
        else{
          // The user logged out
          dispatch({
            type : 'SET_USER',
            user : null
          })

        }
      })
  },[])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/login" element={<Login/>} ></Route>
          <Route exact path="/" element={<>  <Header /> <Home/> </>}></Route>
          <Route exact path="/checkout" element={ <><Header /> <Checkout/></> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
