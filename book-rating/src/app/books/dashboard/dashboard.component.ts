import { Component, signal } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [JsonPipe, UpperCasePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  // alte Syntax
  // books = ['jQuery', 'AngularJS', 'Angular'];

  // NEU: Signals
  // mit Duck-Typing 🦆
  books = signal<Book[]>([{
    isbn: '000',
    title: 'Angular',
    description: 'Tolles Buch',
    rating: 5
  }, {
    isbn: '111',
    title: 'React',
    description: 'Halt nicht Angular',
    rating: 3
  }, {
    isbn: '333',
    title: 'jQuery',
    description: 'Veraltet',
    rating: 1
  }])


  constructor() {
    // setTimeout(() => this.books = [], 3000);
    // setTimeout(() => this.books.set([]), 3000);
  }
}
