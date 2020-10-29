import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input() loginForm: FormGroup;
  @Output() enterSubmit: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

  constructor() { }

  ngOnInit() {
  }
}
