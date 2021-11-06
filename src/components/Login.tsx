import { Button, Input } from "@mui/material";
import React from "react";
import '../css/Login.css';
import logo from '../ubademy-logo.png';
import sendLoginCredentials from "../scripts/logIn";
import { useNavigate } from "react-router";
import { PROFILE_ROUTE } from "../route_paths";
import colors from "../colors";

export default function Login() {
  let navigate = useNavigate();

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
    sendLoginCredentials(username.value, password.value)
      .then(() => {
        setMessage({...message, value:'Logging in...'});
        navigate(PROFILE_ROUTE);
      },
      (errorMsg) => {
        setMessage({...message, value:errorMsg});
      });
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
          style={{margin:0, padding:'0.7em', color: colors.error, fontSize:'0.7em'}}>
          {message.value}
          </p>
        <Button onClick={sendCredentials}>
          Login
        </Button>
      </div>
    </div>
  );
}
