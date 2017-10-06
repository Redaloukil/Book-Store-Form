import React, { Component } from 'react';

class Deliverydetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            deliveryOption:"Primary"
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        
        this.setState({ deliveryOption: event.target.value});
        
    }
    previousform(){
        this.props.previousForm();
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.updateFormData(this.state);
        }
    render(){
        return(
            <div>
                <h1>Choose your delivery options here.</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="radio">
                        <label>
                            <input type="radio"
                                checked={this.state.deliveryOption ==="Primary"}
                                value="Primary"
                                onChange={this.handleChange} />
                                Primary -- 1 day
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input  type="radio"
                                    checked={this.state.deliveryOption ==="Normal"}
                                    value="Normal"
                                    onChange={this.handleChange} />
                                    Normal -- 2-3 days
                            </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input  type="radio"
                                    checked={this.state.deliveryOption ==="slow"}
                                    value="slow"
                                    onChange={this.handleChange}/>
                                    Slow -- 3-4 days
                        </label>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
                <button onClick={this.props.previousForm} className="btn btn-default">Previous</button>
            </div>
        )
    }
}

export default Deliverydetails;