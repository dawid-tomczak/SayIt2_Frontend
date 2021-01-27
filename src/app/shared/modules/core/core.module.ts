import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesWarningComponent } from './components/cookies-warning/cookies-warning.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [CookiesWarningComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CookiesWarningComponent
  ]
})
export class CoreModule { }
