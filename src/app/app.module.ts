import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { BackgroundComponent } from './components/background/background.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { MainPageHeroComponent } from './components/pages/main-page/main-page-hero/main-page-hero.component';
import { BackgorundElementComponent } from './components/background/backgorund-element/backgorund-element.component';
import { CategoryCardComponent } from './components/pages/main-page/category-card/category-card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FicheComponent } from './components/pages/fiche/fiche.component';
import { FicheCardComponent } from './components/pages/fiche/fiche-card/fiche-card.component';
import { QuizComponent } from './components/pages/quiz/quiz.component';
import { QuizCardComponent } from './components/pages/quiz/quiz-card/quiz-card.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './components/pages/login/login.component';
import { ExternalServiceLoginComponent } from './components/pages/login/external-service-login/external-service-login.component';
import { LoginFormComponent } from './components/pages/login/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { TokenInterceptor } from './auth/token.interceptor';
import { MaterialModule } from './shared/modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackgroundComponent,
    MainPageComponent,
    MainPageHeroComponent,
    BackgorundElementComponent,
    CategoryCardComponent,
    FicheComponent,
    FicheCardComponent,
    QuizComponent,
    QuizCardComponent,
    LoginComponent,
    ExternalServiceLoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
