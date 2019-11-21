import { Component, OnInit } from '@angular/core';
import { TranslationsService } from 'src/app/services/translations.service';
import { Translation } from 'src/app/models';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {

  translations: Translation[] = [];
  ficheIndex = 0;

  constructor(private translationsService: TranslationsService) { }

  ngOnInit() {
    this.translationsService.getTranslationsForCategory(1).subscribe(res => {
      this.translations = res;
    }, err => {
      console.log('can not donload translations for category', err);
    });
  }

  changeHandler(event) {
    if (event === 'next') {
      this.ficheIndex += 1;
    } else {
      this.ficheIndex -= 1;
    }
  }

}
