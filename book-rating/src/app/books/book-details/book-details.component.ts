import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, timer, interval, Subscription, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

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

    const obervable = new Observable(subscriber => {

      subscriber.next('😇');
      subscriber.next('🤪');
      subscriber.next('🍔');

      setTimeout(() => { console.log('hier kommt 8balls'), subscriber.next('🎱') }, 1000);
      setTimeout(() => subscriber.error('🤬'), 1000);
    });

    const subscription = obervable.subscribe(observer);

    subscription.unsubscribe();
  }


}
