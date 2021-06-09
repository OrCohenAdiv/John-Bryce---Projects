import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Joke } from 'src/app/models/joke.model';
import { DataService } from 'src/app/services/data.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.css']
})
export class JokePageComponent implements OnInit {

  result$!: Observable<Joke>;

  constructor(private data: DataService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    let index$ = this.route.params.pipe(
      map(prms => (prms[0])));

    this.result$ = index$.pipe(
      switchMap(index => this.data.getJoke(index, 0))
    );
  }

}
