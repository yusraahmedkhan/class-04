import React, { useState } from 'react';
import './App.css';
import Message from './Message';



// class04-bootcamp2020.surge.sh
function App(){

  // ***************useState****************

  let [num, setNum] = useState(1);
  let [isMorning, setMorning] = useState(false);
  return(


    // *********************ternary operator*************************

    <div className={`box ${isMorning ? 'dayLight' : ''}`}>

      <h1>Learning (useState and ternary operator)</h1> <br/>

      <h2> {num}  </h2><br />

       {/* *********************ternary operator************************* */}
      
      Day: {isMorning ? 'Morning' : 'Night'} <br />


      {/* **********************update the state***************************** */}
  <button onClick={()=>setNum(++num)} className="btn">update number</button>
  <button onClick={()=>setMorning(!isMorning)} className="btn">Day Time</button>

     {/* *******************props send to the child component*********************** */}
  <Message  count={num} />
    </div>
  )
}

export default App;
