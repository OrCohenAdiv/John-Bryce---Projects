import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data
  keyword: string = '';
  results: string[] = [];
  isBusy: boolean = false;

  //methods

  setKeyword(value: string) {
    this.keyword = value;
  }

  search() {
    this.isBusy = true;

    setTimeout(() => {
      this.isBusy = false;
      this.results = [
        this.keyword + '1',
        this.keyword + '2',
        this.keyword + '3'
      ];
    }, 2000);
  }
}



/*

1. {{text}} - Only for element content and is just for text.
2. (event)="method()" - Only for events.
3. [directive]="value" - Only for directives and inputs.
4. *structDirective="flexible" - Only for structal directive.

*/