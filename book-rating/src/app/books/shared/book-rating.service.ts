import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  rateUp(book: Book): Book {
    return undefined;
  }

  rateDown(book: Book): Book {
    return undefined;
  }
}
