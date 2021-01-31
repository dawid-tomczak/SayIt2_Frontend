import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MobileDeviceService {

  private _onMobileDevice$: BehaviorSubject<boolean> = new BehaviorSubject(this.checkIfOnMobileDevice(window.innerWidth));
  get onMobileDevice$(): Observable<boolean> {
    return this._onMobileDevice$.asObservable();
  }

  constructor(private router: Router) {
    // subscribing router to check window size
    router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => this._onMobileDevice$.next(this.checkIfOnMobileDevice(window.innerWidth)));
  }

  private checkIfOnMobileDevice(windowWidth: number) {
    return windowWidth <= 414;
  }
}
