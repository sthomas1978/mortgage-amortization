import React from 'react'
import Parameters from './Parameters'
import Breakdown from './BreakDown'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="App">
      <Parameters />
      <Breakdown />
    </div>)
}

export default App;