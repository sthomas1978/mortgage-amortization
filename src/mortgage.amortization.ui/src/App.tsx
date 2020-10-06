import React, { useState } from 'react'
import Parameters from './Parameters'
import Breakdown from './BreakDown'
import './App.css';
import { amortizationEngine, DataItem } from './amortizationEngine'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [data, setData] = useState(new Array<DataItem>())

  const calculateAmortization = (loan: number, period: number, rate: number) => {
    let calculatedData = amortizationEngine(loan, period, rate)
    setData(calculatedData)
  }

  return (
    <div className="App">
      <Parameters calculateAmortization={calculateAmortization} />
      <Breakdown data={data} />
    </div>)
}

export default App;