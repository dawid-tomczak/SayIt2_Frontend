import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Category } from '../../models/category';
import { ChallengeDialogComponent } from '../../../../shared/modules/challenges/components/challenge-dialog/challenge-dialog.component';

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

  constructor(private dialog: MatDialog) { }

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

  openChallengesDialog() {
    const dialogRef = this.dialog.open(ChallengeDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.resetFlags();
    });
  }
}
