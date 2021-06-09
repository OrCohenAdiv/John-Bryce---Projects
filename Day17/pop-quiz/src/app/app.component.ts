import { Component } from '@angular/core';
import { Question } from './model/question';
import { QUESTIONS } from './model/questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentQuestin: Question = new Question;
  currentQuestinIndex: number = 0;
  //all previos questions
  summary: Question[] = [];
  isQuizOver: boolean = false;

  constructor() {

    this.currentQuestin = QUESTIONS[this.currentQuestinIndex];

  }

  userSelectAnswer(answer: string) {

    if (!this.isQuizOver) {

      let answerIndex = this.currentQuestin.answers.indexOf(answer);
      this.currentQuestin.userAnswer = answerIndex;
      this.summary.push(this.currentQuestin);
      this.currentQuestinIndex++;
      this.currentQuestin = QUESTIONS[this.currentQuestinIndex];
      this.isQuizOver = !(this.currentQuestin);
    }
  }

}
