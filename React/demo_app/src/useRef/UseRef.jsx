/*
useRef is a React Hook that lets you reference a value that’s not needed for rendering.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.

const ref = useRef(initialValue)

Does Not Cause Re-renders
If we tried to count how many times our application renders using the useState Hook, 
we would be caught in an infinite loop since this Hook itself causes a re-render.

To avoid this, we can use the useRef Hook.
*/



import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

function UseRef() {

  // NOT RE-RENDER
  useEffect(() => {
    alert('hello');
  })

  const count = useRef(0);
  const changeHandel = () => {
    count.current = count.current + 1;
    console.log(count.current);
  }

  return (
    <div className='container mt-5'>
      <input type="text" placeholder='Enter value' onChange={changeHandel} />
    </div>
  )
}

export default UseRef