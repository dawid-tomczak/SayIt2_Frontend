import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() category: Category;

  fallbackMaterialIcon = 'school';
  quizSelected = false;
  challengeSelected = false;

  constructor() { }

  ngOnInit(): void {
  }

  quizToggle() {
    this.quizSelected = !this.quizSelected;
  }

  challengeToggle() {
    this.challengeSelected = !this.challengeSelected;
  }

  resetFlags() {
    this.quizSelected = false;
    this.challengeSelected = false;
  }
}
