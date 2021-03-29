import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzers = [
    {
      quetion: 'what is capital of andhra pradhesh?',
      answer: [
        { option: 'hyderabad', correct: false },
        { option: 'Vijayawada', correct: false },
        { option: 'Vizag', correct: false },
        { option: 'Amarawathi', correct: true },
      ]
    },
    {
      quetion: 'what is capital of telangana?',
      answer: [
        { option: 'chennai', correct: false },
        { option: 'hyderabad', correct: true },
        { option: 'bangolre', correct: false },
        { option: 'Amarawathi', correct: false },
      ]
    },
    {
      quetion: 'what is capital of maharashtra?',
      answer: [
        { option: 'Guntur', correct: false },
        { option: 'hyderabad', correct: false },
        { option: 'mumbai', correct: true },
        { option: 'vizag', correct: false },
      ]
    },
    {
      quetion: 'what is capital of karnataka?',
      answer: [
        { option: 'nalgonda', correct: false },
        { option: 'bangolre', correct: true },
        { option: 'Vizag', correct: false },
        { option: 'Bangolre', correct: false },
      ]
    },
    {
      quetion: 'what is capital of Tamilanadu?',
      answer: [
        { option: 'chennai', correct: true },
        { option: 'hyderabad', correct: false },
        { option: 'Vizag', correct: false },
        { option: 'chitti', correct: false },
      ]
    },
  ]

  constructor(private _http: HttpClient) { }
  getquizzers() {
    return this.quizzers;
  }

  inserparticipent(name: string, email: string) {
    var body = {
      name: name,
      email: email,
      id: null
    }
    return this._http.post('https://jsonplaceholder.typicode.com/users', body)
  }
}
