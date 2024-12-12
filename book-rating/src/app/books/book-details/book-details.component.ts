import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-book-details',
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  route = inject(ActivatedRoute);

  // Option 1
  // snapshot aktualisiert sich nicht 😞
  // isbn = this.route.snapshot.paramMap.get('isbn');

  // Option 2
  // isbn = signal('');
  // constructor() {
  //   this.route.paramMap.subscribe(paramMap => this.isbn.set(paramMap.get('isbn') || ''))
  // }

  // Option 3 (hardcore RxJs + Signals)
  isbn = toSignal(this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn') || '')
  ), { initialValue: '' });

}
