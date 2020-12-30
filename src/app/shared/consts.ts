import { environment } from 'src/environments/environment';

export const BASE_URL = environment.newBackendUrl + '/api';

// auth
export const USER_CONTROLLER = BASE_URL + '/User';
export const LOGIN_ENDPOINT = USER_CONTROLLER + '/LoginUser';
export const LOGOFF_ENDPOINT = USER_CONTROLLER + '/Logoff';
export const REGISTER_ENDPOINT = USER_CONTROLLER + '/Register';

// categories
export const CATEGORIES_CONTROLLER = BASE_URL + "/Categories";
