import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (

    <>
      <div className='h-screen w-screen duration-200' style={{ backgroundColor: color }}>


        <div className='fixed flex flex-wrap bottom-12 inset-x-0 px-2 justify-center'>
          <div className='fixed flex flex-wrap justify-center gap-3 px-2 bg-white p-2 rounded-xl'>
            <button onClick={()=>setColor("red")} className='outline-none px-4 rounded-xl text-white shadow-lg'
              style={{ backgroundColor: "red" }}
            >Red</button>
            <button onClick={()=>setColor("green")}  className='outline-none px-4 rounded-xl text-white shadow-lg'
              style={{ backgroundColor: "green" }}
            >Green</button>
            <button onClick={()=>setColor("blue")}  className='outline-none px-4 rounded-xl text-white shadow-lg'
              style={{ backgroundColor: "blue" }}
            >Blue</button>
            <button onClick={()=>setColor("yellow")}  className='outline-none px-4 rounded-xl text-black shadow-lg'
              style={{ backgroundColor: "yellow" }}
            >Yellow</button>
            <button onClick={()=>setColor("pink")}  className='outline-none px-4 rounded-xl text-white shadow-lg'
              style={{ backgroundColor: "pink" }}
            >Pink</button>
            <button onClick={()=>setColor("black")}  className='outline-none px-4 rounded-xl text-white shadow-lg'
              style={{ backgroundColor: "black" }}
            >Black</button>
            <button onClick={()=>setColor("purple")}  className='outline-none px-4 rounded-xl text-white shadow-lg'
              style={{ backgroundColor: "purple" }}
            >Pruple</button>
            <button onClick={()=>setColor("white")}  className='outline-none px-4 rounded-xl text-black shadow-lg'
              style={{ backgroundColor: "white" }}
            >White</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
