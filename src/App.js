import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import ReactUseRef from './Pages/UseRef/ReactUseRef'
import Navbar from './components/Navbar/Navbar';
import ReactUseContext from './Pages/UseContext/ReactUseContext';

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/useref' element={<ReactUseRef/>} />
        <Route path='/usecontext' element={<ReactUseContext />} />
      </Routes>
    </div>
  )

}

export default App;
