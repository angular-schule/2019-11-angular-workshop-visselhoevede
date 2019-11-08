import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, startWith, debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent implements OnInit {

  currentWidth = 0;

  ngOnInit() {
    /******************************/

    fromEvent(window, 'resize').pipe(
      map(w => (w.target as Window).innerWidth),
      debounceTime(100),
      startWith(window.innerWidth),
    ).subscribe(width => this.currentWidth = width);

    /******************************/
  }

}
