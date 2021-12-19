import axios from 'axios';
import API_URL from '../apiUrl';
import { ADMIN_LOGIN, ADMIN_REGISTER, GET_USERS, GET_COURSES, USER_PROFILE, GET_COURSE_DATA, GET_TRANSACTIONS } from '../endpoints';
import Cookies from 'universal-cookie/es6';
import { ERROR_BAD_LOGIN, ERROR_EMAIL_USED } from '../apiErrorMessages';

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
          case ERROR_BAD_LOGIN:
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
        name: 'Admin' //TODO this is probably going to be deleted from the backend, for now is a hack
      });
      if (res.data['status'] === 'error') {
        switch (res.data['message']) {
          case ERROR_EMAIL_USED:
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
          case ERROR_BAD_LOGIN:
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

  public async getCourses() {
    try {
      const res = await axios.get(`${API_URL}${GET_COURSES}/none/none`);//Meter lo de los filtros
      if (res.data['status'] === 'error') {
        switch (res.data['message']) {
          case ERROR_BAD_LOGIN:
            return Promise.reject(new Error('Invalid email or password'));
          default:
            return Promise.reject(res.data['message'])
        }
      }
      return res.data['courses'];
    } catch(error) {
      console.log(error);
      return Promise.reject(new Error('Error when trying to reach the server'));
    }
  }

  public async getUserProfile(email: string) {
    try {
      const res = await axios.get(`${API_URL}${USER_PROFILE}/${email}`);
      if (res.data['status'] === 'error') {
        switch (res.data['message']) {
          default:
            return Promise.reject(new Error(res.data['message']));
        }
      }
      const data = res.data['profile'];
      return Promise.resolve({
        _name: data['name'],
        _email: data['email'],
        _location: data['country'],
        _subType: data['subscription_type'],
        _genres: data['interesting_genres'],
        //TODO eventualmente me tienen que llegar los cursos en los que esta inscripto
      });
    } catch (error) {
      console.log(error);
      return Promise.reject(new Error('Error when trying to reach the server'));
    }
  }

  public async getCourseData(id: string) {
    try {
      const res = await axios.get(`${API_URL}${GET_COURSE_DATA}${id}`);
      if (res.data['status'] === 'error') {
        switch (res.data['message']) {
          default:
            return Promise.reject(new Error(res.data['message']));
        }
      }
      const data = res.data['course'];
      return Promise.resolve({
        _title: data['title'],
        _creator_email: data['creator_email'],
        _location: data['country'],
        _subType: data['subscription_type'],
        _description: data['description'],
        _hashtags: data['hashtags'],
        _images: data['images'],
        _videos: data['videos'],
        _course_type: data['course_type'],
        _collaborators: data['collaborators'],
        _students: data['students']
      });
    } catch (error) {
      console.log(error);
      return Promise.reject(new Error('Error when trying to reach the server'));
    }
  }

  public async getTransactions(filter: string) {
    try {
      const res = await axios.get(`${API_URL}${GET_TRANSACTIONS}/${filter}`);//Meter lo de los filtros
      if (res.data['status'] === 'error') {
        switch (res.data['message']) {
          case ERROR_BAD_LOGIN:
            return Promise.reject(new Error('Invalid email or password'));
          default:
            return Promise.reject(res.data['message'])
        }
      }
      return res.data['deposits'];
    } catch(error) {
      console.log(error);
      return Promise.reject(new Error('Error when trying to reach the server'));
    }
  }
}
