import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { FicheComponent } from './components/pages/fiche/fiche.component';
import { LoginComponent } from './components/pages/login/login.component';
import { QuizComponent } from './components/pages/quiz/quiz.component';
import { CategoriesPageComponent } from './modules/categories/components/categories-page/categories-page.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'fiche',
    component: FicheComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'quiz',
    component: QuizComponent,
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
