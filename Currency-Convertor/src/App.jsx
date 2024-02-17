import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'
import { InputBox } from './components/Input'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedaAmont] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  return (
    <>
      <h1 className='text-3xl text-center bg-orange-500'>Hello Aliens!!</h1>
      <InputBox />
    </>
  )
}

export default App
