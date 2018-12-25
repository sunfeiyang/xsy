import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-famous',
  templateUrl: './famous.component.html',
  styleUrls: ['./famous.component.css']
})
export class FamousComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  public famous: Result;

  ngOnInit() {
    this.http.get('/yy/selfamousPage/自?pageSize=20&pageNum=0').subscribe(res => {
      this.famous = <Result>res;
    });
  }

}

export class Result {
  code: number;
  msg: String;
  data: JSON;
}
