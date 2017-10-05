import React, { Component } from 'react';

class Deliverydetails extends Component {
    previousform(){
        this.props.previousForm();
    }
    render(){
        return(
            <div>
                <h1>Choose your delivery options here.</h1>
                <button onClick={this.props.previousForm} className="btn btn-default">Previous</button>
            </div>
        )
    }
}

export default Deliverydetails;