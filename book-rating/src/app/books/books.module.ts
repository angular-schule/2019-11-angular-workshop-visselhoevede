import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookComponent } from './book/book.component';
import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBookComponent } from './create-book/create-book.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { BookDetailsComponent } from './book-details/book-details.component';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './reducers/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './effects/book.effects';

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    CreateBookComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    DatePickerModule,
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([BookEffects])
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
