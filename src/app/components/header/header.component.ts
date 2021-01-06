import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { LoginService } from '../pages/login/services/login.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  logoutSubscription: Subscription;

  constructor(private loginService: LoginService, private router: Router,
    private snackbarService: SnackbarService, private location: Location) { }

  ngOnInit() {
  }

  logout(): void {
    this.logoutSubscription = this.loginService.logoutUser().subscribe(res => {
      this.snackbarService.showSnackbar(res.message);
      this.loginService.clearUserInfo();
      this.router.navigate(['login']);
    });
  }

  back() {
    this.location.back();
  }

  ngOnDestroy() {
    if (this.logoutSubscription) {
      this.logoutSubscription.unsubscribe();
    }
  }
}
