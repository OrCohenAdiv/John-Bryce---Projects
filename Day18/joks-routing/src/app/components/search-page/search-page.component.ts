import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Joke } from 'src/app/models/joke.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  // async GetJoke(keyword: string, index: number): Promise<Joke> {
  //   //  let joke = await this.data.getJoke(keyword, index);
  //   //  console.log(joke);
  //   return await this.data.getJoke(keyword, index);

  // }

  goto(val: string) {
    this.router.navigate(['joke', val, 0]);
  }
}
