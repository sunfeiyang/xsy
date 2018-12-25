import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dic',
  templateUrl: './dic.component.html',
  styleUrls: ['./dic.component.css']
})
export class DicComponent implements OnInit {

  panelOpenState = false;

  public dic: Result;

  // const lookup: string = '我爱你';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/yy/seldicPage/自?pageSize=20&pageNum=0').subscribe(res => {this.dic = <Result>res; });
  }

}
export class Result {
  code: number;
  msg: String;
  data: JSON;
}
