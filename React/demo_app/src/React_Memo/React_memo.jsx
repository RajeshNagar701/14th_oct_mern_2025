/*
The React useMemo Hook returns a memoized value.

The useMemo Hook only runs when one of its dependencies update.

Using memo will cause React to skip rendering a component if its 
props have not changed.

This can improve performance.

*/


import React, { useMemo } from 'react'
import { useState } from "react";

function React_memo() {

  const [number, setNumber] = useState(0);   
  const [name, setName] = useState("Raj nagar");
  
  const increment = () => {
    setNumber(number+1);
  };

  const fetchData = () => {
        alert('hello')
    };
    
    //const calculation= expensiveCalculation(); //withaout useMEMO ALL TIME REDURING 
    const calculation= useMemo(()=>fetchData(),[name]);  // WITH useMemo only function call when depedancy name state change  


  return (
    <div className='container mt-5' >
        Count: {number}
        <button onClick={increment}>+</button>

        <h2>Expensive Calculation</h2>
        {calculation}

        <hr />
        <button className='btn btn-primary' onClick={()=>setName("Akash Nagar")}>Changes</button>
        <h1>{name}</h1>


    </div>
  )
}


export default React_memo


