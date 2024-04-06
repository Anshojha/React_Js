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
      else{
        dispatch(logout)
      }
    })
    .finally(() => setLoading(false))
  },[]);
  return !loading ? (
    <div className='min-h-screen flex  flex-wrap'></div>
  ) : null
}

export default App
