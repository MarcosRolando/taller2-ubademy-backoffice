import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import { LOGIN_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE, USERS_ROUTE } from './routePaths';
import Login from "./pages/Login";
import Profile from './pages/Profile';
import Register from './pages/Register';
import Users from './pages/Users';
import MaterialDrawer from './components/Drawer';

function App() {
  return (
    <div className="App">
      <MaterialDrawer />
      <Routes>
        <Route path={LOGIN_ROUTE} element={<Login />}/>
        <Route path={PROFILE_ROUTE} element={<Profile />} />
        <Route path={REGISTER_ROUTE} element={<Register />} />
        <Route path={USERS_ROUTE} element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
