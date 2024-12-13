import { Component, signal } from '@angular/core';
import { Subject, ReplaySubject, scan, reduce } from 'rxjs';

import { HistoryComponent } from '../../shared/history/history.component';

@Component({
  templateUrl: './gamescore.component.html',
  imports: [HistoryComponent]
})
export class GamescoreComponent {

  logStream$ = new ReplaySubject<unknown>();
  score$ = new Subject<number>();

  currentScore = signal(0);
  finalScore = signal<number | undefined>(undefined);

  constructor() {
    /**
     * Wir entwickeln ein spannendes Browser-Spiel!
     * Jetzt fehlt nur noch der Code, um den Punktestand zu ermitteln ...
     */

    /******************************/

    this.score$.pipe(
      scan((acc, item) => acc + item, 0)
    ).subscribe(score => this.currentScore.set(score));

    this.score$.pipe(
      reduce((acc, item) => acc + item, 0)
    ).subscribe(score => this.finalScore.set(score));


    /******************************/

    this.score$.subscribe({
      next: e => this.logStream$.next(e),
      complete: () => this.logStream$.next('✅ COMPLETE')
    });
  }

  finishGame() {
    this.score$.complete();
  }

  addScore(amount: number) {
    this.score$.next(amount);
  }

}
