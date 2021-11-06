import axios from "axios";
import React from "react";
import API_URL from "../api_url";

export default async function sendLoginCredentials(username: string, password: string, setErrorMessage: any) {
  try {
    let res = await axios.post(API_URL + 'login/', {name:username, password:password});
    //TODO ver que devuelve el back
  } catch(error) {
    console.log(error);
    setErrorMessage('Error when trying to reach the server');
  }
}