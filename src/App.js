import React, { Component } from 'react';
import './App.css';
import Booklib from './components/bookstore';
import Shippingdetails from './components/shipdetails'; 
import Deliverydetails from './components/deldetails';
import Confirmation from './components/confirmation';

//Main Component 
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
    //return to precendent page in 2nd  and 3rd component 
    returnPage(){
      let step = this.state.step;
      step = step - 1;
      this.setState({step : step})
    }
    //update step value and formValues after user submit
    updateFormData(formData) {
      var formValues = Object.assign({}, this.state.formValues,
      formData);
      var nextStep = this.state.step + 1;
      this.setState({step: nextStep, formValues: formValues});
      console.log(formData);
    }
    //Rendering component using step variable value
    renderComponents(){
      switch(this.state.step){
        case 1:
          return <Booklib updateFormData={this.updateFormData}/>;
        case 2 :
          return <Shippingdetails previousForm={this.returnPage} updateFormData={this.updateFormData}/>;
        case 3 :
          return <Deliverydetails previousForm={this.returnPage} updateFormData={this.updateFormData}/>;
        case 4 :
          return <Confirmation previousForm={this.returnPage} data={this.state.formValues}/>;
        default : 
          return <Booklib />;
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
