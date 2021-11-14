import axios from "axios";
import { ERROR_EMAIL_USED } from "../apiErrorMessages";
import API_URL from "../apiUrl";
import { getAxiosConfig, sendAPIrequest } from "../apiWrapper";
import { ADMIN_REGISTER } from "../endpoints";

export default async function sendRegisterCredentials(email: string, password: string) {
  try {
    let res = await sendAPIrequest(() => axios.post(`${API_URL}${ADMIN_REGISTER}`, {
      email:email, 
      password:password, 
      name:'foo' //TODO this is probably going to be deleted from the backend, for now is a hack
    }, getAxiosConfig()));
    if (res.data['status'] === 'error') {
      switch (res.data['message']) {
        case ERROR_EMAIL_USED:
          return Promise.reject(new Error('That email is already used'));
        default:
          return Promise.reject(new Error(res.data['message']));
      }
    }
    return Promise.resolve('');
  } catch(error) {
    console.log(error);
    return Promise.reject(new Error('Error when trying to reach the server'));
  }
}
