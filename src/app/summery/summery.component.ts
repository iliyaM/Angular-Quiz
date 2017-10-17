import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.less']
})
export class SummeryComponent implements OnInit {
@Input('doneQuestions') questions;
@Output() notifyToClose:EventEmitter<boolean> = new EventEmitter<boolean>();

wrongAnswers: number = 0;
rightAnswers: number = 0;
userScore:number;

  constructor() { }

  ngOnInit() {

    for(var i=0; i < this.questions.length; i++) {
      if(this.questions[i].correctAnswer == this.questions[i].selectedAnswer) {
        this.rightAnswers++;
      } else {
        this.wrongAnswers ++;
      }
    }
    this.calculateScore(this.rightAnswers);
  }

  calculateScore(correctAnswers) : void {
    let result = (100 / this.questions.length) * correctAnswers;
    this.userScore = Math.floor(result);
  }

  closeButtonClicked($event): void {
    this.notifyToClose.emit(false);
  }

}

// let overallScore = 100% % this.questions.length;
// let correctAnswersScore = correctAnswers * superScore;
// this.userScore = correctAnswersScore;