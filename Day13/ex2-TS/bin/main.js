"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exam_1 = require("./exam");
var question_1 = require("./question");
var question = new question_1.Question[4];
var exam = new exam_1.Exam(question);
exam.addQuestion(new question_1.Question('1+1=', ['1', '2', '3', '4'], 1));
exam.addQuestion(new question_1.Question('1*1=', ['1', '2', '3', '4'], 0));
exam.addQuestion(new question_1.Question('1-1=', ['1', '2', '3', '0'], 3));
exam.addQuestion(new question_1.Question('1^1=', ['1', '2', '3', '4'], 0));
console.log(exam.print());
//# sourceMappingURL=main.js.map