import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizQuestion } from '../../models/quiz-question';
import { QuizService } from '../../services/quiz.service';

@Component({
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {

  quizQuestions: QuizQuestion[] = [];

  constructor(private quizService: QuizService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.extractDataFromUrl();
  }

  private extractDataFromUrl() {
    this.route.queryParams.subscribe(params => {
      if (params.category) {
        this.downloadQuiz(params.category);
      } else {
        console.error('brak kategorii w URL');
        this.router.navigate(['categories']);
      }
    });
  }

  private downloadQuiz(categoryId: number) {
    this.quizService.getQuizForCategory(categoryId).subscribe(res => {
      this.quizQuestions = res;
      console.log(this.quizQuestions);
    });
  }

}
