import { Component, OnDestroy } from '@angular/core';
import { Subject, ReplaySubject, timer, Subscription, takeWhile, takeUntil, tap } from 'rxjs';
import { HistoryComponent } from '../../shared/history/history.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  templateUrl: './unsubscribe.component.html',
  imports: [HistoryComponent, AsyncPipe]
})
export class UnsubscribeComponent {

  zahl = timer(0, 1000).pipe(
    tap(console.log)
  )

}
