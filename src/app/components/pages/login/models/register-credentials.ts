import { LoginCredentials } from './login-credentials';

export interface RegisterCredentials extends LoginCredentials {
  firstName: string;
  lastName: string;
}
