import axios from "axios";
import API_URL from "../apiUrl";
import { ADMIN_REGISTER } from "../endpoints";

export default async function sendRegisterCredentials(email: string, password: string) {
  try {
    let res = await axios.post(`${API_URL}${ADMIN_REGISTER}`, {
      email:email, 
      password:password, 
      name:'' //TODO this is probably going to be deleted from the backend, for now is a hack
    });
    if (res.data['status'] === 'error') {
      switch (res.data['message']) {
        case 'error_email_in_use':
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
