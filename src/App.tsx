import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import { LOGIN_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE } from './routePaths';
import Login from "./pages/Login";
import Profile from './pages/Profile';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={LOGIN_ROUTE} element={<Login />}/>
        <Route path={PROFILE_ROUTE} element={<Profile />} />
        <Route path={REGISTER_ROUTE} element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
