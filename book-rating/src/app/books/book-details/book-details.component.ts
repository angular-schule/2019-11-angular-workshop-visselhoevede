import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, from, timer, interval, Subscription, Observable } from 'rxjs';
import { take, map, filter, reduce, mergeMap, switchMap, share, shareReplay, catchError, retry } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails = false;

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(isbn => this.bs.getSingle(isbn).pipe(
      retry(3),
      catchError((e: HttpErrorResponse) => of({
        title: 'Error load ' + e.url,
        isbn: '00',
        description: 'Da lief was schief!',
        rating: 1,
        published: undefined
      }))
    ))
  );

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }
}
