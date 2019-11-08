import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

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

    of('😀', '😎', '😘', '💩').subscribe(observer);
  }

}
