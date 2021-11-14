import axios from "axios";
import { ERROR_BAD_LOGIN } from "../apiErrorMessages";
import API_URL from "../apiUrl";
import { setAccessToken } from "../apiWrapper";
import { ADMIN_LOGIN } from "../endpoints";
import { setUserCredentials } from "../userCredentials";

export default async function sendLoginCredentials(email: string, password: string) {
  try {
    let res = await axios.post(`${API_URL}${ADMIN_LOGIN}`, {email:email, password:password});
    if (res.data['status'] === 'error') {
      switch (res.data['message']) {
        case ERROR_BAD_LOGIN:
          return Promise.reject('Invalid email or password');
      }
    }
    setUserCredentials(email, password);
    setAccessToken(res.data['access_token']);
    return Promise.resolve('');
  } catch(error) {
    console.log(error);
    return Promise.reject('Error when trying to reach the server');
  }
}
