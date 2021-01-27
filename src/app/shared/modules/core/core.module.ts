import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesWarningComponent } from './components/cookies-warning/cookies-warning.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { BackgroundComponent } from './components/background/background.component';
import { BackgorundElementComponent } from './components/background/background-element/backgorund-element.component';



@NgModule({
  declarations: [
    CookiesWarningComponent,
    HeaderComponent,
    BackgroundComponent,
    BackgorundElementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CookiesWarningComponent,
    HeaderComponent,
    BackgroundComponent
  ]
})
export class CoreModule { }
