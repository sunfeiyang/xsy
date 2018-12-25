import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-idiom',
  templateUrl: './idiom.component.html',
  styleUrls: ['./idiom.component.css']
})
export class IdiomComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public idiom: Result;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {
    this.http.get('/yy/selidiomPage/自?pageSize=20&pageNum=0').subscribe(res => {this.idiom = <Result>res; });
    // this.http.get('/yy/idiom/爱?rows=10&page=1').subscribe(res => {this.idiom = <Result>res; });
  }

}

export class Result {
  code: number;
  msg: String;
  data: JSON;
}
// export class Idiom {
//   constructor(
//     public tid: number,
//     public idiomname: string,
//     public idiom_spell: string,
//     public idiom_content: string,
//     public idiom_samples: string,
//     public idiom_derivation: string
//   ) {
//   }
// }
