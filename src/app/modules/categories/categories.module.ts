import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { HeroHeaderComponent } from './components/hero-header/hero-header.component';


@NgModule({
  declarations: [CategoriesPageComponent, HeroHeaderComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
