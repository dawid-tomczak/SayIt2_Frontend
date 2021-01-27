import { Component, OnInit } from '@angular/core';
import { cookiesSlide } from 'src/app/shared/animations';
import { CookiesService } from 'src/app/shared/services/cookies.service';

@Component({
  selector: 'app-cookies-warning',
  templateUrl: './cookies-warning.component.html',
  styleUrls: ['./cookies-warning.component.scss'],
  animations: [cookiesSlide]
})
export class CookiesWarningComponent implements OnInit {

  constructor(public cookiesService: CookiesService) { }

  ngOnInit(): void {
  }

  cookiesDecision(approved: boolean) {
    this.cookiesService.cookiesDecision(approved);
  }

}
