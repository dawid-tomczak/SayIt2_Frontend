import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FicheComponent } from './components/pages/fiche/fiche.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { QuizComponent } from './components/pages/quiz/quiz.component';


const routes: Routes = [
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
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
