import react , {useState, useEffect} from "react";
// import { json } from "stream/consumers";

export default function App() {
  const [windowWidth , setwindowWidth ] = useState(window.innerWidth);

 const handleResize = ()=> {
    setwindowWidth(window.innerWidth);
  }

  useEffect(()=>{
    window.addEventListener('resize' , handleResize)
  },[])
  
  return (
    <div>
  {windowWidth}  
    </div>
  )
}





// import react , {useState, useEffect} from "react";
// // import { json } from "stream/consumers";

// export default function App() {
//   const [resourceType , setResoureceType ] = useState("posts")
//   const [items , setItems] = useState([])
//   console.log('render');
//   useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then(response => response.json())
//       .then(json => setItems(json))
//   },[resourceType])
//   return (
//     <>
//     <div>
//     <button onClick={()=>setResoureceType('posts')}>Posts</button>
//     <button onClick={()=>setResoureceType('users')}>Users</button>
//     <button  onClick={()=>setResoureceType('Comments')}>Comments</button>
//     </div>
//       <h1>{resourceType}</h1>
//       {items.map(item => {
//         return <pre>{JSON.stringify(item)}</pre>
//       } ) }
//     </>
//   )
// }