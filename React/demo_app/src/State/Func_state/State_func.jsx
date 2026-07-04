
/*

React components has a built-in state object.

The state object is where you store property values that belong to the component.

When the state object changes, the component re-renders.

The React useState Hook allows us to track state in a function component.
Import useState
We initialize our state by calling useState in our function component.
useState accepts an initial state and returns two values:

The current state.
A function that updates the state.

var [name,setName]=usestate("Rajesh nagar");
{name}


var [mydata,setMydata]=usestate({
        id:"1",
        name:"Rajesh nagar",
        age:33,
        mobile:31548799
});

{mydata.name}



*/

import React, { useEffect, useState } from 'react'
import Func_img from './Func_img';


function State_func() {

  useEffect(()=>{
    alert('hello');
  })

  const [day, setDay] = useState("Hi good Morning");

  const [data, setData] = useState({
    name: "Rajesh Nagar",
    number: 1,
    isImage: true
  })


  return (
    <div className='container mt-5'>
      <button onClick={() => setDay("Hi Good Night")}>Change</button>
      <h1>{day}</h1>
      <hr />
      <button onClick={() => setData({ ...data, name: "Akash Nagar" })}>Change</button>
      <h1>Hi my name is : {data.name}</h1>

      <button className='btn btn-primary' onClick={() => setData({ ...data,number: data.number + 1 })}>+</button>
      <h1>{data.number}</h1>
      <button className='btn btn-primary' onClick={() => setData({...data,number: data.number - 1 })}>-</button>

      <hr />
      <button className='btn btn-primary' onClick={() => setData({...data,isImage: false })}>Hide</button>
      <button className='btn btn-primary' onClick={() => setData({...data,isImage: true })}>Show</button>
      <button className='btn btn-primary' onClick={() => setData({...data,isImage: !data.isImage })}>Hide/Show</button>

      {
        data.isImage ? <Func_img /> : null
      }
    </div>
  )
}

export default State_func