import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  
  const [products, error, loading] = fetchQuery('/api/products')


  if(error) {
    return <h1>Somthing went wrong</h1>
  }

  if(loading) {
    return <h1>....Loading      </h1>
  }

  return (
    <>
     <h1>Handle chai with API</h1>
     <h2>No of products {products.length}</h2>
    </>
  )
}

export default App


const fetchQuery = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        setError(false)
        const repone = await axios.get('/api/products')  
        console.log(repone.data)
        setProducts(repone.data)
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    })()
  }, [])

  return [products , error , loading]
}
