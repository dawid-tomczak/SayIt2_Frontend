import { Injectable } from '@angular/core';
import { ExternalLoginItem, ExternalLoginItemType } from '../models/externalLoginItem';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getPossibleExternalLoginServices(): ExternalLoginItem[] {
    return [new ExternalLoginItem('Facebook'), new ExternalLoginItem('Google'), new ExternalLoginItem('Microsoft')];
  }
}
