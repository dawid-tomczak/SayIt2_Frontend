import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BackgroundComponent } from './components/background/background.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { MainPageHeroComponent } from './components/pages/main-page/main-page-hero/main-page-hero.component';
import { BackgorundElementComponent } from './components/background/backgorund-element/backgorund-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackgroundComponent,
    MainPageComponent,
    MainPageHeroComponent,
    BackgorundElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
