import React, { useEffect, useRef, useState } from 'react'

function UseRef1() {

    useEffect(()=>{
        count.current = count.current + 1;
    })
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    return (
        <div>

            <input style={{border:"solid"}}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>

        </div>
    )
}

export default UseRef1