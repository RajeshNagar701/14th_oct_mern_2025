/*

React Context
React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested 
components more easily than with useState alone.
The Problem
State should be held by the highest parent component in the stack that requires access to the state.
To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

To do this without Context, we will need to pass the state as "props" through each nested component. 
This is called "prop drilling".
YOU PAS STATE A TO E
PROBLEM IS NOT REQUIREMENT IN B,C,D SO ITS SLOW PROCEES
SO now sollution useContext(),createContext() hooks introduced

*/


import React, { createContext, useState } from 'react'
import A from './A'

export const UserContext = createContext();

function Use_context() {

    const [name, setName] = useState("Patel Raj");

    return (

            <UserContext.Provider value={{name,setName}}>
                <div className='container mt-5'>
                    <h1>{name}</h1>
                    <button onClick={() => setName("Nagar Raj")}>Change Main</button>
                    <A />
                </div>
            </UserContext.Provider>
    )
}

export default Use_context