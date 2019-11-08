import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, timer, interval, Subscription } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  isbn: string;
  subscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(paramMap => this.isbn = paramMap.get('isbn'));

    const observer = {
      next: data => console.log(data),
      error: err => console.error(err),
      complete:  () => console.log('COMPLETE! 👍')
    };

    //const subscription = of('😀', '😎', '😘', '💩').subscribe(observer);

    //subscription.unsubscribe();

    this.subscription = interval(1000).subscribe(observer);
  }

  // fixes leak!
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
