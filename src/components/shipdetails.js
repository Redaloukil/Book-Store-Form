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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    renderError(){
        if(this.state.error){
            return(
                <div className="alert alert-danger">
                        {this.state.error}
                </div>
            )
        }
    }
    validateInput() {
        if (this.state.fullName === '') {
            this.setState({error: "Please enter full name"});
        } else if (this.state.contactNumber === '') {
            this.setState({error: "Please enter contact number"});
        } else if (this.state.shippingAddress === '') {
            this.setState({error: "Please enter shipping address"});
        } else {
            this.setState({error: false});
            return true;
        }
    }
    handleSubmit(event){
        if (this.validateInput()){
            event.preventDefault();
            var formData = { fullName: this.state.fullName,
            contactNumber: this.state.contactNumber,shippingAddress: this.state.shippingAddress };
            this.props.updateFormData(formData);
        }
    }
    handleChange(event, attribute) {
        var newState = this.state;
        newState[attribute] = event.target.value;
        this.setState(newState);
        console.log(this.state);
        }
    render(){
        return(
            <div className="col-sm-8">
                <h1>Enter your information.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatum, voluptatem nulla inventore veritatis deserunt minus doloribus laudantium sit, natus, provident illum non vel! Labore ab eligendi amet voluptatibus neque?</p>
                {this.renderError()}
                <form>
                    <div className="form-group">
                        <input className="form-control"
                        type="text"
                        placeholder="Full Name"
                        value={this.state.fullName}
                        onChange={(event) => this.handleChange(event,
                        'fullName')} />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                        type="text"
                        placeholder="Contact number"
                        value={this.state.contactNumber}
                        onChange={(event) => this.handleChange(event,
                        'contactNumber')}/>
                    </div>
                    <div className="form-group">
                        <input  className="form-control" 
                                type="text"
                                placeholder="Shipping Address"
                                value={this.state.shippingAddress}
                                onChange={(event) => this.handleChange(event,
                                'shippingAddress')} />
                    </div>
                    <div className="form-group">
                        <button type="submit" onClick={this.props.previousForm} className="btn btn-default">Previous</button>
                        <button type="submit" ref="submit"className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Shippingdetails;