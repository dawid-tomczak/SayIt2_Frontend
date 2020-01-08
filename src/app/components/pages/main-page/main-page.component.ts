import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models';
import { CategoriesService } from 'src/app/services/categories.service';
import { TranslationsService } from 'src/app/services/translations.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  categories: Category[];

  constructor(private categoriesService: CategoriesService, private translations: TranslationsService) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(res => {
      this.categories = res;
    }, err => {
      console.log('can not get categories', err);
    });

    this.translations.getTranslationsForCategory(1).subscribe(res => console.log(res));
  }

}
