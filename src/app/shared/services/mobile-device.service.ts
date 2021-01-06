import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MobileDeviceService {

  private $onMobileDevice: BehaviorSubject<boolean> = new BehaviorSubject(this.checkIfOnMobileDevice(window.innerWidth));

  constructor(private router: Router) {
    // subscribing router to check window size
    router.events.pipe(
      // filtering only to get NavigationStart events
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => this.$onMobileDevice.next(this.checkIfOnMobileDevice(window.innerWidth)));
  }

  getMobileDeviceObservable(): Observable<boolean> {
    return this.$onMobileDevice.asObservable();
  }

  private checkIfOnMobileDevice(windowWidth: number) {
    return windowWidth <= 414;
  }
}
