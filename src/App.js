import './App.css';
import Left from './components/Left'
import Right from './components/Right'
import employeeList from './models/employeeList'
import { useState } from 'react';

function App() {

  return (
      <div className="App">

          <Left/>
          <Right/>

      </div>
  );
}

export default App;
