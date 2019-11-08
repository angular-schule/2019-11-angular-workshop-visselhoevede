import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, from, timer, interval, Subscription, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(paramMap => this.isbn = paramMap.get('isbn'));

    const observer = {
      next: data => console.log(data),
      error: err => console.error(err),
      complete:  () => console.log('COMPLETE! 👍')
    };

    // TODO
    // 1. mal 10
    // 2. nur Daten durchlassen die größer als 30
    // 3. die Summe aus allen Zahlen
    // 4. zeige so viele Herzen an, wie die Summe groß war (Knobeln)
    const subscription = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(
      map(x => x * 10)

    ).subscribe(observer);

    setTimeout(() => subscription.unsubscribe(), 2000);
  }


}
