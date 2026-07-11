import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyImage from './MyImage';
import { Change, Hide, Minus, Plus, Show, Toggle } from '../cartSlice';



function MyComponent() {

    const {name,number,isImage} = useSelector((state) =>  state.cart );

    const dispach=useDispatch();

    return (
        <div className='container mt-5'>

            <button onClick={()=>dispach(Change())}>Change</button>
            <h1>{name}</h1>

            <hr />

            <button onClick={()=>dispach(Plus())}>+</button>
            <h1>{number}</h1>
            <button onClick={()=>dispach(Minus())}>+</button>

            
            <hr />
            <button onClick={()=>dispach(Hide())}>Hide</button>
            <button onClick={()=>dispach(Show())}>Hide</button>
            <button onClick={()=>dispach(Toggle())}>Toggle</button>
            {
                isImage ? <MyImage/> : null
            }

        </div>
    )
}

export default MyComponent