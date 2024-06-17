import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  //const [multipliedValue, setMultiplidValue] = useState(1)
  let multipliedValue = value * 5;

  const handChange = () => {
    //setMultiplidValue(value*5)
    setValue(value+1)
  }

  return (
    
    <>
     
     <h1>Main value : {value}</h1>
     <button onClick={handChange}>Click to multiply by 5</button>
     <h1>Multiplied Value : {multipliedValue}</h1>
    </>
  )
}

export default App
