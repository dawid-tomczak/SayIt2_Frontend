import { Component, OnInit } from '@angular/core';
import { TranslationsService } from 'src/app/services/translations.service';
import { Translation } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {

  translations: Translation[] = [];
  ficheIndex = 0;
  selectedCategoryId: number;
  mobileDevice = false;

  constructor(private translationsService: TranslationsService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (window.innerWidth <= 414) {
      this.mobileDevice = true;
    }

    this.route.queryParams.subscribe(params => this.selectedCategoryId = params.categoryId);

    this.translationsService.getTranslationsForCategory(this.selectedCategoryId).subscribe(res => {
      this.translations = res;
    }, err => {
      console.log('can not donload translations for category', err);
    });
  }

  changeHandler(event): void {
    if (this.ficheIndex === 0 && this.mobileDevice) {
      this.hideGesturesInfo();
    }

    if (event === 'next') {
      this.ficheIndex += 1;
    } else {
      this.ficheIndex -= 1;
    }
  }

  hideGesturesInfo() {
    const infoElement = document.getElementById('gesturesInfo');

    if (!infoElement.classList.contains('fadeHide')) {
      infoElement.classList.add('fadeHide');
    }
  }

}
