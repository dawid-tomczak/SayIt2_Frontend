import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    component: FicheComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
