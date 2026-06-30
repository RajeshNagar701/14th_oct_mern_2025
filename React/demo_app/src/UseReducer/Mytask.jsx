import React, { useReducer } from 'react'
import { myaction, mydata } from './UseReducer'
import ReducerImg from './ReducerImg';


function Mytask() {

    const [state,dispatch]=useReducer(myaction,mydata);

    return (
        <div className='container mt-5'>
            <button className=' btn btn-primary' onClick={() => dispatch({ type: "Change" })}>Change</button>
            <h1>{state.name}</h1>

            <hr />
            <button className=' btn btn-primary' onClick={() => dispatch({ type: "Plus" })}>+</button>
            <h1>{state.number}</h1>
            <button className=' btn btn-primary' onClick={() => dispatch({ type: "Minus" })}>+</button>

            <hr />
            <button className=' btn btn-primary' onClick={() => dispatch({ type: "Hide" })}>Hide</button>
            <button className=' btn btn-primary' onClick={() => dispatch({ type: "Show" })}>Show</button>
            <button className=' btn btn-primary' onClick={() => dispatch({ type: "Toggle" })}>Toggle</button>
            {
                state.isImage ? <ReducerImg /> : null
            }
        </div>
    )
}

export default Mytask