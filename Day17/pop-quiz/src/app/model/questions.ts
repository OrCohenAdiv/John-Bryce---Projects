import { Question } from "./question";

export const QUESTIONS: Question[] = [
    {
        caption: 'What is the rarest M&M color?',
        answers: ['Blue', 'Black', 'Yellow', 'Brown'],
        correctAnswer: 3,
        userAnswer: -1
    },
    {
        caption: 'Which country consumes the most chocolate per capita?',
        answers: ['Israel', 'Switzerland', 'USA', 'Cannada'],
        correctAnswer: 1,
        userAnswer: -1
    },
    {
        caption: 'Which is the only edible food that never goes bad?',
        answers: ['Apple', 'Bread', 'Milk', 'Honey'],
        correctAnswer: 3,
        userAnswer: -1
    },
    {
        caption: 'Which country invented ice cream?',
        answers: ['China', 'USA', 'Japan', 'Franch'],
        correctAnswer: 0,
        userAnswer: -1
    },
    {
        caption: 'From which country does Gouda cheese originate',
        answers: ['USA', 'Israel', 'Netherlands', 'Franch'],
        correctAnswer: 2,
        userAnswer: -1
    },
]