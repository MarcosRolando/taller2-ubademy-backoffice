import axios from 'axios';
import API_URL from '../apiUrl';
import { ADMIN_LOGIN, ADMIN_REGISTER, GET_USERS } from '../endpoints';
import Cookies from 'universal-cookie/es6';

export class BackendService {
  cookies: any;
  tokenInterceptor: any;

  constructor() {
    this.cookies = new Cookies();
  }

  private _addTokenInterceptor() {
    this.tokenInterceptor = axios.interceptors.request.use((config: any) => {
      config.headers['Authorization'] = `Bearer ${this.cookies.get('jwt')}`;
      return config;
    });
  }

  public isLoggedIn() {
    return (this.cookies.get('jwt') !== undefined)
  }

  public logout() {
    this.cookies.remove('jwt');
    axios.interceptors.request.eject(this.tokenInterceptor);
  }

  public async login(email: string, password: string) {
    try {
      const res = await axios.post(`${API_URL}${ADMIN_LOGIN}`, {email, password});
      if (res.data['status'] === 'error') {
        switch (res.data['message']) {
          case 'error_bad_login':
            return Promise.reject(new Error('Invalid email or password'));
          default:
            return Promise.reject(res.data['message'])
        }
      }
      this.cookies.set('jwt', res.data['access_token']);
      this._addTokenInterceptor();
    } catch(error) {
      console.log(error);
      return Promise.reject(new Error('Error when trying to reach the server'));
    }
  }

  public async register(email: string, password: string) {
    try {
      const res = await axios.post(`${API_URL}${ADMIN_REGISTER}`, {
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
      this.cookies.set('jwt', res.data['access_token']);
      this._addTokenInterceptor();
    } catch(error) {
      console.log(error);
      return Promise.reject(new Error('Error when trying to reach the server'));
    }
  }

  public async getUsers() {
    try {
      const res = await axios.get(`${API_URL}${GET_USERS}`);
      if (res.data['status'] === 'error') {
        switch (res.data['message']) {
          case 'error_bad_login':
            return Promise.reject(new Error('Invalid email or password'));
          default:
            return Promise.reject(res.data['message'])
        }
      }
      return res.data['users'];
    } catch(error) {
      console.log(error);
      return Promise.reject(new Error('Error when trying to reach the server'));
    }
  }
}
