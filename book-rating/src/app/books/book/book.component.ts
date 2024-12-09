import { Component, input, output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  // alter Stil - undefined ist immer ein Problem :-(
  // @Input() book: Book | undefined

  // alter Stil - nicht mehr verwenden
  // @Output rateUp = new EventEmitter<Book>();

  book = input.required<Book>();

  rateUp = output<Book>();
  rateDown = output<Book>();

  doRateUp() {
    this.rateUp.emit(this.book());
  }

  doRateDown() {
    this.rateDown.emit(this.book());
  }
}
