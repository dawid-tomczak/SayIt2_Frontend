import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './components/pages/login/login.component';
import { ExternalServiceLoginComponent } from './components/pages/login/external-service-login/external-service-login.component';
import { LoginFormComponent } from './components/pages/login/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { TokenInterceptor } from './auth/token.interceptor';
import { MaterialModule } from './shared/modules/material/material.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { FlashcardsModule } from './modules/flashcards/flashcards.module';
import { QuizzesModule } from './modules/quizzes/quizzes.module';
import { CoreModule } from './shared/modules/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
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
    CoreModule,
    MaterialModule,
    CategoriesModule,
    FlashcardsModule,
    QuizzesModule,
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
