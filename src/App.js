import React from "react";
import "./style.css";
import Tweet from './tweet'

function App() {
  const Sayhello = ()=>{
    alert('sayHi')
  }
  return (
    <div className = 'app'>
    <h1><center>Hello from React</center></h1>
      <button className ='button' onClick = {Sayhello}>push this button</button>
      <Tweet/>
      <Tweet/>
      <Tweet/>
    </div>
  );
}
export default App;
