import React , {useState , useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login , logout } from './conf/store/authSlice'

function App() {

  const [loading , setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData));
      }
    })
    .finally()
  },[]);
  return (
    <>
     <h1>A Blog with appwrite</h1>
    </>
  )
}

export default App
