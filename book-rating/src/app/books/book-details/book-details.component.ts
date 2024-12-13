import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { concatMap, map, mergeMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookStoreService } from '../shared/book-store.service';
import { AsyncPipe, JsonPipe } from '@angular/common';


@Component({
  selector: 'app-book-details',
  imports: [RouterLink, AsyncPipe,JsonPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  route = inject(ActivatedRoute);
  bs = inject(BookStoreService);

  book$ = this.route.paramMap.pipe(

    map(paramMap => paramMap.get('isbn') || ''),
    concatMap(isbn => this.bs.getSingleBook(isbn))
  )

}
