import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }


  fetchQuestion() {
    return this.http.get('assets/quiz.json').map(res => res.json());
  }

}
