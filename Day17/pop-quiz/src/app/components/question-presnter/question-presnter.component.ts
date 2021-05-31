import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-question-presnter',
  templateUrl: './question-presnter.component.html',
  styleUrls: ['./question-presnter.component.css']
})
export class QuestionPresnterComponent implements OnInit {

  @Input()
  question: Question = new Question;

  @Output()
  answerChosen = new EventEmitter<string>();

  onSelectAnswer(answer: string) {
    this.answerChosen.emit(answer);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
