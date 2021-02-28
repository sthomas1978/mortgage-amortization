import React from 'react'
import './App.css';
import NavigationRouting from "./NavigationRouting"

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const App = () => {
  return (
      <BrowserRouter>
        <NavigationBar />
        <NavigationRouting />
      </BrowserRouter>)
}

export default App;