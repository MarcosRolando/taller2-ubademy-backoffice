import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import { LOGIN_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE, USERS_ROUTE, COURSES_ROUTE } from './routePaths';
import Login from "./pages/Login";
import Profile from './pages/Profile';
import Register from './pages/Register';
import Users from './pages/Users';
import Courses from './pages/Courses';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN_ROUTE} element={<Login />}/>
          <Route path={PROFILE_ROUTE} element={<Profile />} />
          <Route path={REGISTER_ROUTE} element={<Register />} />
          <Route path={USERS_ROUTE} element={<Users />} />
          <Route path={COURSES_ROUTE} element={<Courses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
