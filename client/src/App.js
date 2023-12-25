import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Searchbar from './Components/Searchbar';
import TickerData from './constituents_json.json'

function App() {
  return (
    <>
    <div className="App">
     <Searchbar placeholder={"Enter a ticker..."} data = {TickerData}/>
    </div>
    </>
    
  );
}

export default App;
