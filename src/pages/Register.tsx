import { Button, Input } from "@mui/material";
import React from "react";
import colors from "../colors";
import MaterialDrawer from "../components/Drawer";
import sendRegisterCredentials from "../scripts/register";
import '../styles/Register.css';

const Register = () => {
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
  const [confPassword, setConfPassword] = React.useState({
    value: '',
    placeholder: 'Confirm password',
    style: {},
  });
  const [message, setMessage] = React.useState({
    value:'',
    style:{color:colors.error, fontSize:'0.7em'},
  });

  function sendCredentials() {
    if (!email.value.trim()) {
      setEmail({...email, 
        placeholder:'Please enter an email',
        style:{color:colors.error}
      });
      return;
    }
    if (!password.value.trim()) {
      setPassword({...password, 
        placeholder:'Please enter a password',
        style:{color:colors.error}
      });
      return;
    }
    if (confPassword.value !== password.value) {
      setConfPassword({...confPassword, 
        style:{color:colors.error}
      });
      setMessage({
        ...message,
        value: 'Passwords must match',
        style:{...message.style, color:colors.error}
      });
      return;
    }
    sendRegisterCredentials(email.value, password.value)
      .then(() => {
        setMessage({
          ...message,
          style: {...message.style, color:'white'},
          value: 'Register successful'
        });
      },
      (errorMsg: Error) => {
        setMessage({
          ...message, 
          value:errorMsg.message,
          style:{...message.style, color:colors.error},
        });
      });
  }

  return (
    <div style={{width:'30%'}} className='Register'>
      <MaterialDrawer />
      <div className='RegisterCredentials'>
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
          style={{...password.style, paddingTop:'1em'}}
          onChange={(e) => setPassword({...password, value:e.target.value, style:{}})}
        />
        <Input 
          placeholder={confPassword.placeholder}
          type='password'
          value={confPassword.value}
          style={{...confPassword.style, paddingTop:'1em'}}
          onChange={(e) => setConfPassword({...confPassword, value:e.target.value, style:{}})}
        />
        <p 
          style={{...message.style, display:'flex', alignSelf:'center', margin:0, padding:'0.7em'}}>
          {message.value}
          </p>
        <Button onClick={sendCredentials}>
          Register
        </Button>
      </div>
    </div>
  );
}

export default Register;
