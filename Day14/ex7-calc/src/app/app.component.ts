import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex7-calc';

  //data
  firstNumber: number = 0;
  secondNumber: number = 0;
  sum: number | null = null;
  diff: number | null = null;
  product: number | null = null;
  results: string[] = [];
  isBusy: boolean = false;

  //methods

  _reset() {
    this.sum = null;
    this.diff = null;
    this.product = null;
  }

  setFirstNumber(firstNumber: number) {
    this.firstNumber = firstNumber;
    this._reset()
  }
  setSecondNumber(secondNumber: number) {
    this.secondNumber = secondNumber;
    this._reset()
  }

  calc() {
    this.isBusy = true;

    setTimeout(() => {
      this.isBusy = false;
      if (this.firstNumber === null || this.secondNumber === null) {
        this._reset();
      }
      else {
        this.sum = this.firstNumber + this.secondNumber;
        this.diff = this.firstNumber - this.secondNumber;
        this.product = this.firstNumber * this.secondNumber;
      }
      this.results = [
        this.firstNumber + '+' + this.secondNumber + '=' + (this.firstNumber + this.secondNumber),
        this.firstNumber + '-' + this.secondNumber + '=' + (this.firstNumber - this.secondNumber),
        this.firstNumber + '*' + this.secondNumber + '=' + (this.firstNumber * this.secondNumber)
      ];
    }, 2000);
  }
}

