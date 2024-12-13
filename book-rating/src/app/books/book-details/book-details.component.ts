import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, concatMap, map, mergeMap, of, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookStoreService } from '../shared/book-store.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-book-details',
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  route = inject(ActivatedRoute);
  bs = inject(BookStoreService);

  book$ = toSignal(this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn') || ''),
    switchMap(isbn => this.bs.getSingleBook(isbn).pipe(
      catchError((err: HttpErrorResponse) => of({
        title: 'Fehler',
        description: err.message
      }))
    ))
  ));
}
