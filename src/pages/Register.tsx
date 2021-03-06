import { Button, CircularProgress, Input } from "@mui/material";
import React from "react";
import colors from "../colors";
import { MyWindow } from "../components/MyWindow";
import { useRegister } from "../hooks/useRegister";
import '../styles/Register.css';

const Register = () => {
  const [email, setEmail] = React.useState({
    value: '',
    placeholder: 'Username',
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
  const [loading, setLoading] = React.useState(false);

  const { register } = useRegister();

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
    setLoading(true);
    register(email.value, password.value)
      .then(() => {
        setMessage({
          ...message,
          style: {...message.style, color:'white'},
          value: 'Register successful'
        });
      })
      .catch((error: Error) => {
        setMessage({
          ...message, 
          value:error.message,
          style:{...message.style, color:colors.error},
        });
      })
      .finally(() => {
        setLoading(false);
      })
  }

  return (
    <MyWindow>
      <div className='Register'>
        <h1 className='RegisterTitle'>
          Register new admin
        </h1>
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
          <Button onClick={sendCredentials} disabled={loading}>
            Register
          </Button>
          {(loading) ? <CircularProgress size={30} style={{alignSelf: 'center'}} /> : <></>}
        </div>
      </div>
    </MyWindow>
  );
}

export default Register;
