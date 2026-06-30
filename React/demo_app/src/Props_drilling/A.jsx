import React from 'react'
import B from './B'

function A({pname,psetName}) {
    return (
        <div>
            <h1>Hi i am A Component  : </h1>
            <B pname={pname} psetName={psetName}/>
        </div>
    )
}

export default A