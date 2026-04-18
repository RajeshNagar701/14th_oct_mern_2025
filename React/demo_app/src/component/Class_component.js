
/*

React Class Components

Before React 16.8, Class components were the only way to track state and lifecycle on a 
React component. 

Function components were considered "state-less".

With the addition of Hooks, Function components are now almost equivalent to Class components. 
The differences are so minor that you will probably never need to use a Class component in React.

Even though Function components are preferred, 
there are no current plans on removing Class components from React.

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
  
*/

//rce

import React, { Component } from 'react'

export class Class_component extends Component {
  render() {
    return (
      <div class="bg-success p-5">
        <h1>Hi i am from Class_component</h1>
      </div>
    )
  }
}
export default Class_component

/*
//rcc
import React, { Component } from 'react'

export default class Class_component extends Component {
  render() {
    return (
      <div>Class_component</div>
    )
  }
}
*/
