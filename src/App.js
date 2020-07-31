import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Buddy from './components/Buddy/Buddy';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Buddy></Buddy>
    </div>
  );
}

export default App;
