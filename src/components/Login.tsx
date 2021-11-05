import { Button, Input } from "@mui/material";
import React from "react";
import '../css/Login.css';
import logo from '../ubademy-logo.png';

export default function Login() {
  return (
    <div style={{width:'30%'}}>
      <img src={logo} alt='ubademy-logo' style={{paddingBottom:20}}/>
      <div className='LoginCredentials'>
        <Input placeholder='Email'/>
        <Input placeholder='Password'/>
        <Button>Login</Button>
      </div>
    </div>
  );
}
