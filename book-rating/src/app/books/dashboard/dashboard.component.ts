import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { loadBooks } from '../actions/book.actions';
import { selectBookLoading, selectBooks } from '../selectors/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  loading$ = this.store.pipe(select(selectBookLoading));
  books$ = this.store.pipe(select(selectBooks));

  constructor(private store: Store<State>) {
    //this.store.dispatch(loadBooks());
  }

  doRateUp(book: Book) {
    // // Evil code!
    // // const ratedBook = {
    // //   ...book,
    // //   rating: book.rating + 1
    // // };
    // const ratedBook = this.br.rateUp(book);
    // this.updateAndSortList(ratedBook);
  }

  doRateDown(book: Book) {
    // const ratedBook = this.br.rateDown(book);
    // this.updateAndSortList(ratedBook);
  }

  updateAndSortList(ratedBook: Book) {
    // this.books = this.books
    //   .map(book => book.isbn === ratedBook.isbn ? ratedBook : book)
    //   .sort((a, b) => b.rating - a.rating);
  }

  doCreate(newBook: Book) {
    // this.books = [...this.books, newBook];
  }
}
