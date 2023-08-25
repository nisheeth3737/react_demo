import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Create from './components/create';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Create />
        </div>
      </div>
    </Router>
  );
}

export default App;
