import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-allegorical',
  templateUrl: './allegorical.component.html',
  styleUrls: ['./allegorical.component.css']
})
export class AllegoricalComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  public allegorical: Result;

  ngOnInit() {
    this.http.get('/yy/selallegoricalPage/自?pageSize=20&pageNum=0').subscribe(res => {
      this.allegorical = <Result>res;
    });
  }

}
export class Result {
  code: number;
  msg: String;
  data: JSON;
}
// export class AllegoricalResult {
//   code: number;
//   msg: String;
//   data: [Array<Allegorical>];
//   constructor(
//     code: number,
//     msg: String,
//     data: [Array<Allegorical>]) {
//     this.code = code;
//     this.msg = msg;
//     this.data = data;
//   }
//
// }
// export class Allegorical {
//   constructor(
//     public tid: number,
//     public allegoricalquestion: string,
//     public allegoricalanswer: string
//   ) {
//   }
// }
