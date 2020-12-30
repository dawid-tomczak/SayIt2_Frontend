import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit, OnDestroy {

  loadingCategories: boolean = false;
  categories: Category[] = [];
  private subscriptions: Subscription[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.downloadCategories());
  }

  private downloadCategories(): Subscription {
    this.loadingCategories = true;

    return this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
      this.loadingCategories = false;
    }, err => {
      this.loadingCategories = false;
    })
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
