import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-wordsea',
  templateUrl: './wordsea.component.html',
  styleUrls: ['./wordsea.component.css']
})
export class WordseaComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  public wordsea: Result;

  ngOnInit() {
    this.http.get('/yy/selwordseaPage/自?pageSize=20&pageNum=1').subscribe(res => {
      this.wordsea = <Result>res;
    });
  }

}

export class Result {
  code: number;
  msg: String;
  data: JSON;
}
