/*
The React component lifecycle refers to the series of phases a component passes 
through—from its creation and insertion into the DOM to its removal.

The Three Main Phases

1)Mounting: The "birth" phase where the component is created and inserted into 
the DOM for the first time.

=>componentDidMount() : when load component then autocall

2)Updating: The "growth" phase where the component re-renders because 
its state or props have changed.

=>componentDidUpdate()  when update component then autocall

3)Unmounting: The "death" phase where the component is removed from the DOM.

=>componentWillUnmount() when remove component then autocall


*/


import React, { Component } from 'react'
import Life_image from '../Life_image';

export class Class_life extends Component {

    constructor() {
        super();
        this.state = {
            isImage: true
        }
    }

    componentDidUpdate(){
        console.log('Component DidUpdate / Updated')
    }

    render() {
        return (
            <div className='container mt-5'>
                <button className='btn btn-primary' onClick={()=>this.setState({isImage:false})}>Hide</button>
                 <button className='btn btn-primary' onClick={()=>this.setState({isImage:true})}>Show</button>
                {
                    this.state.isImage? <Life_image/> : null
                }
            </div>
        )
    }
}

export default Class_life