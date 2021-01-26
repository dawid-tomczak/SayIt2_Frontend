import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { LoginService } from '../pages/login/services/login.service';
import { Location } from '@angular/common';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  level: number;
  subscriptions: Subscription[] = [];

  constructor(private loginService: LoginService, private router: Router,
    private snackbarService: SnackbarService, private location: Location, private userService: UserService) { }

  ngOnInit() {
    this.subscriptions.push(this.downloadLevel());
  }

  logout(): void {
    this.subscriptions.push(
      this.userService.logoutUser().subscribe(res => {
        this.snackbarService.showSnackbar(res.message);
        this.loginService.clearUserInfo();
        this.router.navigate(['login']);
      })
    )
  }

  back() {
    this.location.back();
  }

  downloadLevel(): Subscription {
    return this.userService.getLevel().subscribe(res => {
      this.level = res;
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }
}
