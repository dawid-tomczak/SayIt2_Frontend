import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { slideHeight } from 'src/app/shared/animations';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  animations: [slideHeight]
})
export class LoginFormComponent implements OnInit {

  @Input() loginForm: FormGroup;
  @Input() registerMode: boolean;
  @Output() enterSubmit: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

  constructor() { }

  ngOnInit() {
  }
}
