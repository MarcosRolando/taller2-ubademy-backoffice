import { Button, Input } from "@mui/material";
import React from "react";
import '../css/Login.css';
import logo from '../ubademy-logo.png';
import sendLoginCredentials from "../scripts/logIn";

export default function Login() {
  const [username, setUsername] = React.useState({
    value: '',
    placeholder: 'Username',
    style: {},
  });
  const [password, setPassword] = React.useState({
    value: '',
    placeholder: 'Password',
    style: {},
  });
  const [errorMessage, setErrorMessage] = React.useState('');

  function sendCredentials() {
    if (!username.value.trim()) {
      setUsername({...username, 
        placeholder:'Please enter your username',
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
    sendLoginCredentials(username.value, password.value, setErrorMessage);
  }

  return (
    <div style={{width:'30%'}}>
      <img src={logo} alt='ubademy-logo' style={{paddingBottom:20}}/>
      <div className='LoginCredentials'>
        <Input 
          placeholder={username.placeholder}
          type='username'
          value={username.value}
          style={username.style}
          onChange={(e) => setUsername({...username, value:e.target.value, style:{}})}
        />
        <Input 
          placeholder={password.placeholder}
          type='password'
          value={password.value}
          style={{...password.style, paddingTop:'1em'}}
          onChange={(e) => setPassword({...password, value:e.target.value, style:{}})}
        />
        <p 
          style={{margin:0, padding:'0.7em', color: '#CF6679', fontSize:'0.7em'}}>
          {errorMessage}
          </p>
        <Button onClick={sendCredentials}>
          Login
        </Button>
      </div>
    </div>
  );
}
