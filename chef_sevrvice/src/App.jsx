import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import  Navbar from './components/navbar'

function App() {

  return (
    <>
     <Navbar/>
     {/* <div className='w-full h-screen bg-indigo-500'></div> */}
     <Home/>
     {/* <About/> */}
    </>
  )
}

export default App
