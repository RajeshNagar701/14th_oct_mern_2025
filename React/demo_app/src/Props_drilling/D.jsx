import React from 'react'

function D({pname,psetName}) {
  return (
    <div>
        <h1>Hi i am D Component : {pname}</h1>
        <button onClick={()=>psetName("Nagar Nirav From D")}>Change Main</button>
    </div>
  )
}

export default D