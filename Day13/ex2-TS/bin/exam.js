"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    function Exam(questionArr) {
        this.questionArr = questionArr;
    }
    Exam.prototype.print = function () {
        for (var _a = 0, _b = this.questionArr; _a < _b.length; _a++) {
            var question = _b[_a];
            console.log(question.caption);
            for (var i = 0; i < question.answers.length; i++) {
                console.log(i + ". " + question.answers[i]);
            }
        }
    };
    Exam.prototype.grade = function (answers) {
        var grade = 0;
        for (var _i = 0; _i < answers.length; _i++) {
            if (answers[_i] == this.questionArr[_i].correctIndex) {
                return grade += (100 / (this.questionArr.length / 100));
            }
        }
    };
    Exam.prototype.addQuestion = function (theQuestion) {
        this.questionArr.push(theQuestion);
    };
    return Exam;
}());
exports.Exam = Exam;
//# sourceMappingURL=exam.js.map