import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Quiz } from '../quiz'
import { Router } from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
  quizzers: Quiz[] = [];
  currentQuiz = 0;
  answerselected = false;
  correctanswer = 0;
  incorrectanswer = 0;
  result = false;
  rendamise: number;
  getname = JSON.parse(localStorage.getItem('participent'));
  name = this.getname.name;
  constructor(private _quiz: QuizService, private _route: Router) { }

  ngOnInit(): void {
    this.quizzers = this._quiz.getquizzers();
    this.rendamise = Math.floor(Math.random() * this.quizzers.length);
  }
  onanswer(option: boolean) {
    this.answerselected = true;
    setTimeout(() => {
      this.currentQuiz++;
      this.rendamise = Math.floor(Math.random() * this.quizzers.length);
      this.answerselected = false;

    }, 2000)
    if (option) {
      this.correctanswer++;
    }
    else {
      this.incorrectanswer++;
    }
  }

  showresult() {
    this.result = true;
  }
  retry() {
    this._route.navigate(['register'])
    localStorage.clear();
  }


}
