import { Button, CircularProgress, Input } from "@mui/material";
import React, { useState } from "react";
import '../styles/Login.css';
import logo from '../ubademy-logo.png';
import { useNavigate } from "react-router";
import { COURSES_ROUTE } from "../routePaths";
import colors from "../colors";
import { useLogin } from "../hooks/useLogin";
import '../styles/Login.css';

export default function Login() {
  let navigate = useNavigate();
  const { login } = useLogin();
  const [loading, setLoading] = useState(false);

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
  const [message, setMessage] = React.useState({
    value:'',
    style:{color:colors.error},
  });

  function sendCredentials() {
    if (!username.value.trim()) {
      setUsername({...username, 
        placeholder:'Please enter your username',
        style:{color:colors.error}
      });
      return;
    }
    if (!password.value.trim()) {
      setPassword({...password, 
        placeholder:'Please enter your password',
        style:{color:colors.error}
      });
      return;
    }
    setLoading(true);
    login(username.value, password.value)
      .then(() => {
        setMessage({...message, value:'Logging in...'});
        navigate(COURSES_ROUTE);
      },
      (error: Error) => {
        setMessage({...message, value:error.message});
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className='Login'>
      <div style={{display: 'flex', alignSelf:'center', marginBottom: '2em'}}>
        <img src={logo} alt='ubademy-logo' style={{resize:'both'}}/>
      </div>
      <div className='LoginCredentials'>
        <Input 
          placeholder={username.placeholder}
          type='email'
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
          style={{display:'flex', alignSelf:'center', margin:0, padding:'0.7em', color: colors.error, fontSize:'0.7em'}}>
          {message.value}
          </p>
        <Button onClick={sendCredentials} disabled={loading}>
          Login
        </Button>
        {(loading) ? <CircularProgress size={30} style={{alignSelf: 'center'}} /> : <></>}
      </div>
    </div>
  );
}
