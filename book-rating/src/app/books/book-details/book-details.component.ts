import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, from, timer, interval, Subscription, Observable } from 'rxjs';
import { take, map, filter, reduce } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('isbn')),
      map(isbn => this.bs.getSingle(isbn))
    ).subscribe(
      book$ => book$.subscribe(book => this.book = book)
    );

  }


}
