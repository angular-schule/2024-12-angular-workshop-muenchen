import { Component, input, Input } from '@angular/core';
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

  // neuer Stil (mit Signal)
  book = input.required<Book>();

}
