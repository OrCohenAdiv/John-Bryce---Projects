import { Question } from "./question";
export class Exam {

    private questions: Question[] = [];
    // constructor(public questionArr: Question[]) { }

    print(): void {
        for (const question of this.questions) {
            console.log(question.caption);
            for (let i = 0; i < question.answers.length; i++) {
                console.log(`${i}. ${question.answers[i]}`)
            }
            console.log('--------------------------------');
        }
    }
    grade(answers: number[]): number {
        let totalCorrect = 0;
        for (let i = 0; i < answers.length; i++) {
            let question = this.questions[i];
            let answer = answers[i];

            if (typeof (question) !== 'undefined') {
                if (answer === question.correctIndex) totalCorrect++;
            }
        }

        return totalCorrect * answers.length / 100;
    }

    addQuestion(theQuestion: Question): void {
        this.questions.push(theQuestion);
    }
}
