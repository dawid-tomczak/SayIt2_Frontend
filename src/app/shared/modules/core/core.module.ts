import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesWarningComponent } from './components/cookies-warning/cookies-warning.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    CookiesWarningComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CookiesWarningComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
