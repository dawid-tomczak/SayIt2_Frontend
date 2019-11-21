import { Component, OnInit } from '@angular/core';
import { TranslationsService } from 'src/app/services/translations.service';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {

  constructor(private translationsService: TranslationsService) { }

  ngOnInit() {
    this.translationsService.getTranslationsForCategory(1).subscribe(res => console.log(res));
  }

}
