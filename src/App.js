import React, { Component } from 'react';
import './App.css';
import Booklib from './bookstore';
import Shippingdetails from './shipdetails'; 
import Deliverydetails from './deldetails';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
          step: 1,
          formValues: {},
      }
      this.renderComponents = this.renderComponents.bind(this);
      this.updateFormData = this.updateFormData.bind(this);
      this.returnPage = this.returnPage.bind(this);
    }
    returnPage(){
      let step = this.state.step;
      step = step - 1;
      this.setState({step : step})
    }
    updateFormData(formData) {
      var formValues = Object.assign({}, this.state.formValues,
      formData);
      var nextStep = this.state.step + 1;
      this.setState({step: nextStep, formValues: formValues});
      console.log(formData);
    }
    renderComponents(){
      switch(this.state.step){
        case 1:
          return <Booklib updateFormData={this.updateFormData}/>;
        case 2 :
          return <Shippingdetails previousForm={this.returnPage} updateFormData={this.updateFormData}/>;
        case 3 :
          return <Deliverydetails previousForm={this.returnPage} updateFormData={this.updateFormData}/>
      }
    }
   render () {
      return (
        <div className="container">
          {this.renderComponents()}
        </div>
      ) 
    }
  }

export default App;
