import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private br: BookRatingService, private bs: BookStoreService) {
  }

  ngOnInit() {
    this.bs.getAll()
      .subscribe(books => this.books = books);
  }

  doRateUp(book: Book) {
    // Evil code!
    // const ratedBook = {
    //   ...book,
    //   rating: book.rating + 1
    // };
    const ratedBook = this.br.rateUp(book);
    this.updateAndSortList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSortList(ratedBook);
  }

  updateAndSortList(ratedBook: Book) {
    this.books = this.books
      .map(book => book.isbn === ratedBook.isbn ? ratedBook : book)
      .sort((a, b) => b.rating - a.rating);
  }

  doCreate(newBook: Book) {
    this.books = [...this.books, newBook];
  }
}
