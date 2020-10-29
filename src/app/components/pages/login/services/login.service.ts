import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExternalLoginItem, ExternalLoginItemType } from '../models/externalLoginItem';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  getPossibleExternalLoginServices(): ExternalLoginItem[] {
    return [new ExternalLoginItem('Facebook'), new ExternalLoginItem('Google'), new ExternalLoginItem('Microsoft')];
  }

  generateNewLoginFormGroup(): FormGroup {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });

    return this.loginForm;
  }

  GetLoginFormGroup(): FormGroup {
    return this.loginForm;
  }
}
