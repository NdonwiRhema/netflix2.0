import React from 'react';
import {
  BrowserRouter as Router, Routes,Route,} from "react-router-dom";

import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';


function App() {
  const User = null
  return (
    <div className="app">
     {!User?(<LoginScreen/>):(
      <Router>
        <Routes>
            <Route exact path="/" element={<HomeScreen/>}/>
        </Routes>
      </Router>
     )}
    
    

    </div>
  );
}

export default App;
