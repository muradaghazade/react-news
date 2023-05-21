import { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes,Navigate} from "react-router-dom";
import News from './pages/News';
import Navbar from './components/UI/Navbar/Navbar';



function App() {
  return (
    <BrowserRouter>
          <Navbar/>

    <Routes>
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/news" element={<News/>}/>
        {/* <Route path="/error" element={<Error/>}/> */}
        <Route
        path="*"
        element={<Navigate to="/error" replace />}
    />
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
