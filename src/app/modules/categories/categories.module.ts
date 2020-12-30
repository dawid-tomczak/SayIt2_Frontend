import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { HeroHeaderComponent } from './components/hero-header/hero-header.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { CategoryCardComponent } from './components/category-card/category-card.component';


@NgModule({
  declarations: [CategoriesPageComponent, HeroHeaderComponent, CategoryCardComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MaterialModule
  ]
})
export class CategoriesModule { }
