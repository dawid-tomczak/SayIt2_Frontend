import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { FicheComponent } from './components/pages/fiche/fiche.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { QuizComponent } from './components/pages/quiz/quiz.component';


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
    path: 'main',
    component: MainPageComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'categories',
    loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule),
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
