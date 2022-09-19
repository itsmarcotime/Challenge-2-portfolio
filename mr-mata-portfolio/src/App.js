import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Nav from './component/Nav';

function App() {
  return (
    <div>
      <Nav>
      </Nav>
      <main>
        <About></About>
      </main>
      
    </div>
  );
}

export default App;
