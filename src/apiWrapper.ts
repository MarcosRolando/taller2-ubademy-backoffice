import axios, { AxiosResponse } from "axios";
import { ERROR_EXPIRED_CREDENTIALS } from "./apiErrorMessages";
import API_URL from "./apiUrl";
import { ADMIN_LOGIN } from "./endpoints";
import { getUserCredentials } from './userCredentials';

let accessToken = ''; // The JWT
let config = {
  headers: { Authorization: '' }
};

export function setAccessToken(newAccessToken: string) {
  accessToken = newAccessToken;
  config = {
    headers: { Authorization: `Bearer ${accessToken}` }
  };
}

export function getAxiosConfig() {
  return config;
}

export async function sendAPIrequest(request: () => Promise<AxiosResponse>) {
  if (accessToken === '') {
    return Promise.reject(new Error('No access token defined, log in first!'));
  }
  const res = await request();
  if ((res.data['status'] === 'error') && (res.data['message'] === ERROR_EXPIRED_CREDENTIALS)) {
    const login_res = await axios.post(`${API_URL}${ADMIN_LOGIN}`, getUserCredentials());
    if (login_res.data['status'] === 'error') { // Unexpected error
      return Promise.reject(login_res);
    }
    setAccessToken(login_res.data['access_token']); // Update the JWT
    return request();
  }
  return res;
}
