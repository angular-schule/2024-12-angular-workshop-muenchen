import { Component, computed, input, output } from '@angular/core';
import { Book } from '../shared/book';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  imports: [RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  // alter Stil - undefined ist immer ein Problem :-(
  // @Input() book: Book | undefined

  // alter Stil - nicht mehr verwenden
  // @Output rateUp = new EventEmitter<Book>();

  book = input.required<Book>();
  minRating = input<number>(1);
  maxRating = input<number>(5);

  rateUp = output<Book>();
  rateDown = output<Book>();

  doRateUp() {
    this.rateUp.emit(this.book());
  }

  doRateDown() {
    this.rateDown.emit(this.book());
  }

  rateDownAllowed = computed(() => this.book().rating > this.minRating());
  rateUpAllowed   = computed(() => this.book().rating < this.maxRating());
}
