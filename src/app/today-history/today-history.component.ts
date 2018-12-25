import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-today-history',
  templateUrl: './today-history.component.html',
  styleUrls: ['./today-history.component.css']
})
export class TodayHistoryComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  public todayHistory: Result;

  ngOnInit() {
    this.http.get('/yy/poemRandom').subscribe(res => {
      this.todayHistory = <Result>res;
    });
  }
}
export class Result {
  code: number;
  msg: String;
  data: JSON;
}
