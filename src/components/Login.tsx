import { Button, Input } from "@mui/material";
import React from "react";
import '../css/Login.css';
import logo from '../ubademy-logo.png';
import sendLoginCredentials from "../scripts/logIn";

export default function Login() {
  const [email, setEmail] = React.useState({
    value: '',
    placeholder: 'Email',
    style: {},
  });
  const [password, setPassword] = React.useState({
    value: '',
    placeholder: 'Password',
    style: {},
  });

  function sendCredentials() {
    if (!email.value.trim()) {
      setEmail({...email, 
        placeholder:'Please enter your email',
        style:{color:'#CF6679'}
      });
      return;
    }
    if (!password.value.trim()) {
      setPassword({...password, 
        placeholder:'Please enter your password',
        style:{color:'#CF6679'}
      });
      return;
    }
    sendLoginCredentials(email.value, password.value);
  }

  return (
    <div style={{width:'30%'}}>
      <img src={logo} alt='ubademy-logo' style={{paddingBottom:20}}/>
      <div className='LoginCredentials'>
        <Input 
          placeholder={email.placeholder}
          type='email'
          value={email.value}
          style={email.style}
          onChange={(e) => setEmail({...email, value:e.target.value, style:{}})}
        />
        <Input 
          placeholder={password.placeholder}
          type='password'
          value={password.value}
          style={password.style}
          onChange={(e) => setPassword({...password, value:e.target.value, style:{}})}
        />
        <Button onClick={sendCredentials}>
          Login
        </Button>
      </div>
    </div>
  );
}
