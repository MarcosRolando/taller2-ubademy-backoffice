import axios from "axios";
import React from "react";
import API_URL from "../api_url";
import { ADMIN_LOGIN } from "../endpoints";

export default async function sendLoginCredentials(username: string, password: string, message: any, setMessage: any) {
  try {
    let res = await axios.post(`${API_URL}${ADMIN_LOGIN}`, {name:username, password:password});
    if (res.data['detail'] === 'error_bad_login') {
      setMessage({...message, value:'Invalid username or password'});
    } else {
      setMessage({value:'Logging in...', style:{}});
    }
    //TODO change route to profile
  } catch(error) {
    console.log(error);
    setMessage({...message, value:'Error when trying to reach the server'});
  }
}
