import React from 'react';
import { Routes, Route } from 'react-router';
import '../css/App.css';
import { LOGIN_ROUTE, PROFILE_ROUTE } from '../route_paths';
import Login from "./Login";
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={PROFILE_ROUTE} element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
