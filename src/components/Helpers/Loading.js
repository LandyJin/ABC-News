import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

export class Loading extends Component {
  render() {
    return (
        <div>
            <h1>Loading  
                <Spinner style={{ width: '0.8rem', height: '0.8rem' }} type="grow" />
                <Spinner style={{ width: '0.8rem', height: '0.8rem' }} type="grow" />
                <Spinner style={{ width: '0.8rem', height: '0.8rem' }} type="grow" />
            </h1> 
        </div>
    )
  }
}

export default Loading
