import React, { Component } from 'react';

class Shippingdetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullName:"",
            contactNumber:"",
            shippingAdress:"",
            error:false,
        }
    }
    handleSubmit()
    renderForm(){
        return(
            <form onSubmit={this.handleSubmit}>

            </form>
        )
    }
    render(){
        return(
            <div>
                <h1>Enter your shipping information.</h1>
                <button onClick={this.props.previousForm} className="btn btn-default">Previous</button>
            </div>
        )
    }
}
export default Shippingdetails;