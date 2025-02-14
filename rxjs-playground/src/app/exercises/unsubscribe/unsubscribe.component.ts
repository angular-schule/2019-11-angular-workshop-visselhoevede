import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, timer, Subscription } from 'rxjs';
import { takeWhile, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'rxw-unsubscribe',
  templateUrl: './unsubscribe.component.html',
})
export class UnsubscribeComponent implements OnInit, OnDestroy {

  logStream$ = new Subject<string | number>();
  destroyed = false;

  ngOnInit() {
    const interval$ = timer(0, 1000).pipe(
      takeWhile(() => !this.destroyed)
    );

    interval$.subscribe(
      msg => this.log(msg),
      err => this.log('ERROR: ' + err),
      () => this.log('COMPLETED')
    );
  }

  ngOnDestroy() {
    this.destroyed = true;
  }


  log(msg: string | number) {
    console.log(msg);
    this.logStream$.next(msg);
  }
}
