import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter } from 'rxjs';
import { HistoryComponent } from '../../shared/history/history.component';

@Component({
  templateUrl: './creating.component.html',
  imports: [HistoryComponent]
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<unknown>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // Observer
    const observer = {
      next: (e: string) => this.log(e),
      error: (e: any) => this.log('ERROR ' + e),
      complete: () => this.log('COMPLETE')
    };

    // Observable
    const observable = of('🙂', '😎', '😍');

    // Subscription
    const subscription = observable.subscribe(observer);
    subscription.unsubscribe();

    // Reactive --> Push statt Pull Prinzip


    /******************************/
  }

  private log(msg: unknown) {
    this.logStream$.next(msg);
  }

}
