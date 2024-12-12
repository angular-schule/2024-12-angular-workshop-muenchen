import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-details',
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  route = inject(ActivatedRoute);

  // snapshot aktualisiert sich nicht 😞
  //isbn = this.route.snapshot.paramMap.get('isbn');

  isbn = signal('');

  constructor() {
    this.route.paramMap.subscribe(paramMap => this.isbn.set(paramMap.get('isbn') || ''))
  }

}
