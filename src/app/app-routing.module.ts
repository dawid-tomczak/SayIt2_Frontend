import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { LoginComponent } from './modules/login/components/login-page/login.component';
import { CategoriesPageComponent } from './modules/categories/components/categories-page/categories-page.component';
import { FlashcardsPageComponent } from './modules/flashcards/components/flashcards-page/flashcards-page.component';
import { QuizPageComponent } from './modules/quizzes/components/quiz-page/quiz-page.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'flashcards',
    component: FlashcardsPageComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'quiz',
    component: QuizPageComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'categories',
    component: CategoriesPageComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: '',
    redirectTo: '/categories',
    pathMatch: 'full',
    canActivate: [AuthGuardGuard]
  },
  {
    path: '**',
    redirectTo: '/categories',
    pathMatch: 'full',
    canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
