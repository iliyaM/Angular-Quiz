import { Answer } from './answer';

export class Question {
    correctAnswer: number;
    id: number;
    name: string;
    selectedAnswer: number;
    answers: Array<Answer>;
}