import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  
  // const [products, error, loading] = fetchQuery('/api/products')

  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        setLoading(true)
        setError(false)
        const repone = await axios.get('/api/products?search=' + search, {
          signal : controller.signal
        })  
        console.log(repone.data)
        setProducts(repone.data)
        setLoading(false)
      } catch (error) {
        if(axios.isCancel(error)) {
          console.log("Request Cancel ", error.message)
          return
        }
        setError(true)

        // after every call we need to unmount the data which has beeb mnounted or loaded data

        return () => {
          controller.abort()
        }
      }
    })()
  }, [search])


  // if(error) {
  //   return <h1>Somthing went wrong</h1>
  // }

  // if(loading) {
  //   return <h1>....Loading      </h1>
  // }

  return (
    <>
     <h1>Handle chai with API</h1>

     <input placeholder='search' type='text'
     value={search}
     onChange={(e) => setSearch(e.target.value)}
     />
     
    {loading && (<h1>Loading.....</h1>)}
    {error && (<h1>Somthing went wrong</h1>)}

    <h2>No of products {products.length}</h2>
    </>
  )
}

export default App


const fetchQuery = () => {
 

  return [products , error , loading]
}
