import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SayIt';
  showHeaderAndBackground = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.startRouterSubscription();
  }

  private startRouterSubscription(): void {
    // handling hidding of header and banckground
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(change => {
      // tslint:disable-next-line:no-string-literal
      if (change['urlAfterRedirects'] === '/login') {
        this.showHeaderAndBackground = false;
      } else {
        this.showHeaderAndBackground = true;
      }
    });
  }


}
