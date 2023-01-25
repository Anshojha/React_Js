import { builtinModules } from 'module';
import React from 'react';
import ReactDOM from 'react-dom/client';

const name = "Ansh";
let greet = "";


let currHour = new Date(2023,1,1,14).getHours();

let newDate = new Date().toLocaleDateString();

let currTime = new Date().toLocaleTimeString();



if(currHour >=6 && currHour<=12){
  greet = "Good Morning!";
}
else if(currHour>12 && currHour<16){
  greet = "Good AfterNoon!";
}
else if(currHour>=16 && currHour<20){
  greet = "Good Evening!";
}

else {
  greet = "Good Night";
}


ReactDOM.createRoot(document.getElementById('root')).render(
<>
<h1>Hey  {name } , {greet}xa````````````````````````````````````````w. </h1>
<h1>Today's date is {newDate}</h1>
<h1>Today's date is {currTime}</h1>
</>
);

