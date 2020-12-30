import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from 'src/app/auth/auth-guard.guard';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';


const routes: Routes = [
  {
    path: "",
    component: CategoriesPageComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: "**",
    component: CategoriesPageComponent,
    canActivate: [AuthGuardGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
