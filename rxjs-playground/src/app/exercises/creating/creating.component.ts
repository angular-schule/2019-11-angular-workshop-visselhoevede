import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval } from 'rxjs';
import { take, mergeMap, concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  myObservable$: Observable<number | string>;

  ngOnInit() {

    // tslint:disable-next-line: max-line-length
    const loreIpsum = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    this.myObservable$ = from(loreIpsum.split(' ')).pipe(
      concatMap(x => of(x).pipe(delay(1000)))
    );
  }
}
