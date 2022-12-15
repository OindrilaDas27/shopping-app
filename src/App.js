import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import SignUP from './pages/signup/signup';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/signup' element={<SignUP />}/>
      </Routes>
    </div>
  );
}

export default App;
