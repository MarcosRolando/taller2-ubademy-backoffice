import axios from 'axios';
import API_URL from '../apiUrl';
import { ADMIN_LOGIN, ADMIN_REGISTER, GET_USERS, GET_COURSES, USER_PROFILE, GET_COURSE_DATA, GET_TRANSACTIONS, CHANGE_BLOCKED_STATUS, COURSE_SETUP_INFO, GET_USER_METRICS, USER_COURSES } from '../endpoints';
import Cookies from 'universal-cookie/es6';
import { ERROR_BAD_LOGIN, ERROR_EMAIL_USED, ERROR_EXPIRED_CREDENTIALS, ERROR_NO_DEPOSITS } from '../apiErrorMessages';

export class BackendService {
  cookies: any;
  static tokenInterceptor: any;
  static jwtInterceptor: any;

  constructor() {
    this.cookies = new Cookies();
    if ((this.cookies.get('jwt') !== undefined) && (BackendService.tokenInterceptor === undefined)) {
      this._addInterceptors();
    }
  }

  private _addInterceptors() {
    BackendService.tokenInterceptor = axios.interceptors.request.use((config: any) => {
      config.headers['Authorization'] = `Bearer ${this.cookies.get('jwt')}`;
      return config;
    });
    BackendService.jwtInterceptor = axios.interceptors.response.use(async res => {
      if (res.data['status'] === 'error') {
        switch (res.data['message']) {
          case ERROR_EXPIRED_CREDENTIALS:
            await this.login(this.cookies.get('username'), this.cookies.get('password'));
            return undefined;
        }
      }
      return res;
    })
  }

  public isLoggedIn() {
    return (this.cookies.get('jwt') !== undefined)
  }

  public logout() {
    this.cookies.remove('jwt');
    axios.interceptors.request.eject(BackendService.tokenInterceptor);
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
      this.cookies.set(email, res.data['username']);
      this.cookies.set(password, res.data['password']);
      this._addInterceptors();
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
    } catch(error) {
      console.log(error);
      return Promise.reject(new Error('Error when trying to reach the server'));
    }
  }

  public async getUsers(): Promise<any> {
    try {
      const res = await axios.get(`${API_URL}${GET_USERS}`);
      if (res === undefined) {
        return this.getUsers();
      }
      if (res.data['status'] === 'error') {
        switch (res.data['message']) {
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

  public async getCourses(): Promise<any> {
    try {
      const res = await axios.get(`${API_URL}${GET_COURSES}/none/none`);//Meter lo de los filtros
      if (res === undefined) {
        return this.getCourses();
      }
      if (res.data['status'] === 'error') {
        switch (res.data['message']) {
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

  public async getUserProfile(email: string): Promise<any> {
    try {
      const res = await axios.get(`${API_URL}${USER_PROFILE}/${email}`);
      if (res === undefined) {
        return this.getUserProfile(email);
      }
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
        _wallet_data: data['wallet_data'],
        _profile_image: data["profile_picture_link"],
      });
    } catch (error) {
      console.log(error);
      return Promise.reject(new Error('Error when trying to reach the server'));
    }
  }

  public async getUserCourses(email: string): Promise<any> {
    try {
      const res = await axios.get(`${API_URL}${USER_COURSES}/${email}`);
      if (res === undefined) {
        return this.getUserCourses(email);
      }
      if (res.data['status'] === 'error') {
        switch (res.data['message']) {
          default:
            return Promise.reject(new Error(res.data['message']));
        }
      }
      const data = res.data;
      return Promise.resolve({
        _collaborator: data['collaborator'],
        _creator: data['creator'],
        _student: data['student'],

      });
    } catch (error) {
      console.log(error);
      return Promise.reject(new Error('Error when trying to reach the server'));
    }
  }

  public async getCourseData(id: string): Promise<any> {
    try {
      const res = await axios.get(`${API_URL}${GET_COURSE_DATA}${id}`);
      if (res === undefined) {
        return this.getCourseData(id);
      }
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

  public async getTransactions(filter: string): Promise<any> {
    try {
      const res = await axios.get(`${API_URL}${GET_TRANSACTIONS}/${filter}`); //Meter lo de los filtros
      if (res === undefined) {
        return this.getTransactions(filter);
      }
      if (res.data['status'] === 'error') {
        switch (res.data['message']) {
          case ERROR_NO_DEPOSITS:
            return [];
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

  public async changeBlockedStatus(email: string, isBlocked: boolean): Promise<any> {
    try {
      const res = await axios.post(`${API_URL}${CHANGE_BLOCKED_STATUS}`, {"modified_user":email, "is_blocked": isBlocked});
      if (res === undefined) {
        return this.changeBlockedStatus(email, isBlocked);
      }
      if (res.data['status'] === 'error') {
        switch (res.data['message']) {
          default:
            return Promise.reject(res.data['message'])
        }
      }
      return res.data;
    } catch(error) {
      console.log(error);
      return Promise.reject(new Error('Error when trying to reach the server'));
    }
  }

  public async getCoursesSetupInfo(): Promise<any> {
    try {
      const res = await axios.get(`${API_URL}${COURSE_SETUP_INFO}`);
      if (res === undefined) {
        return this.getCoursesSetupInfo();
      }
      if (res.data['status'] === 'error') {
        switch (res.data['message']) {
          default:
            return Promise.reject(new Error(res.data['message']));
        }
      }
      return res.data;
    } catch (error) {
      console.log(error);
      return Promise.reject(new Error('Error when trying to reach the server'));
    }
  }

  public async getUserMetrics(): Promise<any> {
    try {
      const res = await axios.get(`${API_URL}${GET_USER_METRICS}`);
      if (res === undefined) {
        return this.getUserMetrics();
      }
      if (res.data['status'] === 'error') {
        switch (res.data['message']) {
          default:
            return Promise.reject(new Error(res.data['message']));
        }
      }
      const data = res.data;
      return Promise.resolve({
        _users_amount: data["users_amount"],
        _blocked_users: data["blocked_users"],
        _last_registered_users:data["last_registered_users"],
        _last_logged_users:data["last_logged_users"],
        _last_registered_google_users :data["last_registered_google_users"],
        _last_logged_google_users:data["last_logged_google_users"],
      });
    } catch (error) {
      console.log(error);
      return Promise.reject(new Error('Error when trying to reach the server'));
    }
  }
}
