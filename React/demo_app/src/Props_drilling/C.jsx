import React from 'react'
import D from './D'


function C({pname,psetName}) {
    return (
        <div>
            <h1>Hi i am C Component</h1>
            <D pname={pname} psetName={psetName} />
        </div>
    )
}

export default C