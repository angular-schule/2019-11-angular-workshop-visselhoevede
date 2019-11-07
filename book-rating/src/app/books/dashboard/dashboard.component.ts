import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private br: BookRatingService) {
  }

  ngOnInit() {
    this.books = [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Tolles Buch',
        rating: 5,
        published: new Date('2019-11-07')
      },
      {
        isbn: '111',
        title: 'AngularJS',
        description: 'Altes Buch',
        rating: 3,
        published: new Date('2019-09-01')
      },
      {
        isbn: '222',
        title: 'React',
        description: 'Meh...',
        rating: 1,
        published: new Date('2018-02-07')
      }
    ];
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
