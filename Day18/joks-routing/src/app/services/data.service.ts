import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, switchMap } from 'rxjs/operators';
import { Joke } from '../models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getJoke(keyword: string, index: number): Promise<Joke> {
    const url = `${this.baseUrl}/jokes`;

    return this.http.get<Joke[]>(url).pipe(
      map(jokes => jokes.
        filter(joke => joke.setup.
          includes(keyword))),
      map(list => list[index])).
      toPromise();

  }

}
