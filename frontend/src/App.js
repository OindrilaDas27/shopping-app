import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar/NavBar";
import LandingPage from './pages/landingPage/landingPage';
import SignUP from './pages/signup/signup';
import LogIn from './pages/login/login';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/signup' element={<SignUP />}/>
        <Route path='/login' element={<LogIn />}/>
      </Routes>
    </div>
  );
}

export default App;
