import axios from 'axios';
import API_URL from '../apiUrl';
import { ADMIN_LOGIN, ADMIN_REGISTER } from '../endpoints';

export class BackendService {
  baseUrl: String;
  
  constructor() {
    this.baseUrl = API_URL;
  }

  public async login(email: string, password: string) {
    try {
      let res = await axios.post(`${API_URL}${ADMIN_LOGIN}`, {email, password});
      if (res.data['status'] === 'error') {
        switch (res.data['message']) {
          case 'error_bad_login':
            return Promise.reject(new Error('Invalid email or password'));
          default:
            return Promise.reject(res.data['message'])
        }
      }
    } catch(error) {
      console.log(error);
      return Promise.reject(new Error('Error when trying to reach the server'));
    }
  }

  public async register(email: string, password: string) {
    try {
      let res = await axios.post(`${API_URL}${ADMIN_REGISTER}`, {
        email,
        password,
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
    } catch(error) {
      console.log(error);
      return Promise.reject(new Error('Error when trying to reach the server'));
    }
  }

  public async getUsers() {
    try {
      
    } catch(error) {

    }
  }
}
