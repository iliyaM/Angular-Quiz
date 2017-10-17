import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { SummeryComponent } from '../summery/summery.component';
import { Question } from '../interfaces/question';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})

export class MainComponent implements OnInit {
questions:Array<Question>;
index:number = 0;
isValidQuiz:boolean = false;
summery:boolean =  false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.fetchQuestion().subscribe(res => this.questions = res.questions);
  }

  next() {
    if(this.index == this.questions.length) {
      this.isValidQuiz = false;
    }
    this.index++;
    this.isValidQuiz = false;
  }

  prev() {
    this.index --;
  }

  markAnswer(answerId) {
    this.questions[this.index].selectedAnswer = answerId;
    this.isValidQuiz = true;
  }

  closeEventFromChild($event) {
    this.summery = $event;
  }

}
