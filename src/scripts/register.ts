import axios from "axios";
import API_URL from "../apiUrl";
import { ADMIN_LOGIN } from "../endpoints";

export default async function sendRegisterCredentials(email: string, password: string) {
  try {
    let res = await axios.post(`${API_URL}${ADMIN_LOGIN}`, {email:email, password:password});
    if (res.data['status'] === 'error') {
      switch (res.data['message']) {
        case 'error_email_in_use':
          return Promise.reject('That email is already used');
      }
    }
    return Promise.resolve('');
  } catch(error) {
    console.log(error);
    return Promise.reject('Error when trying to reach the server');
  }
}
