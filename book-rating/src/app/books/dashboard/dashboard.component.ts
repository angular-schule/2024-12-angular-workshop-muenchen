import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  // alte Syntax
  // books = ['jQuery', 'AngularJS', 'Angular'];

  // NEU: Signals
  books = signal(['jQuery', 'AngularJS', 'Angular'])


  constructor() {
    // setTimeout(() => this.books = [], 3000);
    setTimeout(() => this.books.set([]), 3000);
  }
}
