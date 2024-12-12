import { Component, inject, signal } from '@angular/core';

import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookCreateComponent } from "../book-create/book-create.component";
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-dashboard',
  imports: [BookComponent, BookCreateComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  // alte Syntax
  // books = ['jQuery', 'AngularJS', 'Angular'];

  // NEU: Signals
  // mit Duck-Typing 🦆
  books = signal<Book[]>([])

  br = inject(BookRatingService);
  bs = inject(BookStoreService);

  constructor() {
    this.bs.getAllBooks().subscribe(b => this.books.set(b));
  }

  doRateUp(book: Book) {
    const ratedBook = this.br.rateUp(book);
    // const ratedBook =  {
    //   ...book,
    //   rating: book.rating < 5 ? book.rating + 1 : 5
    // }
    this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book) {

    const newBook = this.books()
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);

    this.books.set(newBook);
  }

  addBook(newBook: Book) {
    this.books.update(books => [...books, newBook]);
  }
}
