import { Component, OnInit } from '@angular/core';
import { cookiesSlide } from 'src/app/shared/animations';

@Component({
  selector: 'app-cookies-warning',
  templateUrl: './cookies-warning.component.html',
  styleUrls: ['./cookies-warning.component.scss'],
  animations: [cookiesSlide]
})
export class CookiesWarningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
