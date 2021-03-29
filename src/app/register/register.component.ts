import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailpattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private _quiz: QuizService, private _route: Router) { }

  ngOnInit(): void {
  }
  onSubmit(name, email) {
    this._quiz.inserparticipent(name, email).subscribe(
      (data: any) => {
        localStorage.clear();
        localStorage.setItem('participent', JSON.stringify(data));
        console.log(data);
        this._route.navigate(['/quiz'])
      }
    )

  }

}
