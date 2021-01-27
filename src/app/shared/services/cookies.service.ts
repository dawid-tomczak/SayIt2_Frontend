import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { COOKIES_APPROVED_KEY } from '../consts';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  private _cookiesApproved$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get cookiesApproved$(): Observable<boolean> {
    return this._cookiesApproved$.asObservable();
  }

  constructor() {
    this._cookiesApproved$.next(this.checkIfCookiesApproved());
  }

  cookiesDecision(approved: boolean) {
    this._cookiesApproved$.next(approved);
    this.setItem(COOKIES_APPROVED_KEY, approved.toString());
  }

  setItem(key: string, value: string) {
    const storage = this._cookiesApproved$.getValue() ? localStorage : sessionStorage;

    storage.setItem(key, value);
  }

  getItem(key: string): string {
    const storage = this._cookiesApproved$.getValue() ? localStorage : sessionStorage;

    return storage.getItem(key);
  }

  removeItem(key: string) {
    const storages = [localStorage, sessionStorage];

    storages.forEach(storage => {
      storage.removeItem(key);
    });
  }

  private checkIfCookiesApproved(): boolean {
    return localStorage.getItem(COOKIES_APPROVED_KEY) === 'true';
  }
}
