
import React , {useState} from 'react'



function App() {
const [aman , setAman] = useState({count : 0 , theme:'blue'})  //[currentState , updatedState]
const count = aman.count
const theme = aman.theme

function decrementCount(){
setAman(precState => {
  return {...precState,count : precState.count-1}
})
}

function incrementCount (){
 setAman(precState =>{
  return {...precState,count:precState.count+1}
 })
}


  return (
    <>
    <button  onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
