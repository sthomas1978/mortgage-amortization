import React, { Component } from 'react'
import Parameters from './Parameters'
import Breakdown from './BreakDown'
import './App.css';
import { amortizationEngine } from './amortizationEngine'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  state = { data: []}

  calculateAmortization = (loan, period, rate) => {
    let data = amortizationEngine({loan, period, rate})
    this.setState({data})
  }

  render() {
    return (
      <div className="App">
      <Parameters calculateAmortization={this.calculateAmortization} />
      <Breakdown data={this.state.data}/>
    </div>)
  };
}

export default App;