import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Joke } from 'src/app/models/joke.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  search$ = new BehaviorSubject<string>('');
  results$!: Observable<Joke>;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.results$ = this.search$.pipe(
      switchMap((kw, index) => this.data.getJoke(kw, index))
    );
  }

  setKeyword(value: string) {
    this.search$.next(value);
  }

  GetJoke(keyword: string, index: number): Promise<Joke> {
    let joke;
    joke = console.log(this.data.getJoke(keyword, index));
    return this.data.getJoke(keyword, index);

  }
}
