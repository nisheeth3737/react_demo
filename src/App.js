import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Create from './components/create';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Read from './components/read';
import Update from './components/update';

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Routes exact path="/create" component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Routes exact path="/read" component={Read} />
        </div>

        <Routes path="/update" component={Update} />
      </div>
    </Router>
  );
}

export default App;
