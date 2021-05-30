import { ParseErrorLevel } from '@angular/compiler';
import { Component } from '@angular/core';
import { rejects } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Fun-With-Promise';

  private delay(time: number): Promise<number> {

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(42), time)
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => { reject('This is fail'); }, 2000);
    })
  }

  private async verySlowHello(): Promise<string> {

    await this.delay(3000);
    return 'Hello';
  }

  async go() {

    console.log("here we go!");

    let p1 = this.delay(2000);
    let p2 = this.verySlowHello();

    let pall = Promise.all([p1, p2]);
    let resAll = await pall;
    console.log(resAll);

    let pAny = Promise.race([p1, p2]);
    let resAny = await pAny;
    console.log(resAny);

  }
}


