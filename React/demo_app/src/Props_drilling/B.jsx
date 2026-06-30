import React from 'react'
import C from './C'

function B({pname,psetName}) {
  return (
      <div>
            <h1>Hi i am B Component</h1>
            <C pname={pname} psetName={psetName} />
        </div>
  )
}

export default B