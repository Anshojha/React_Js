import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  const [Image, setImage] = useState([]);
  const ImageLoder = async () => {
    try {
      console.log("Clicked!!");
      const res = await axios.get("https://picsum.photos/200");
      const result = res.data;
      console.log(result);
      setImage(result);
    } catch (error) {
      console.error("Error!!");
    }
  };
  return (
    <div>
      {windowWidth}
      <h1>This is the image that I am </h1>
      <button className="btn" onClick={ImageLoder}>
        Hit me!
      </button>
      <div className="bak">
        {Image.map((ele, i) => {
          return (
            <img key={i} src={ele.download_url} width={100} height={100} />
          );
        })}
      </div>
    </div>
  );
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
