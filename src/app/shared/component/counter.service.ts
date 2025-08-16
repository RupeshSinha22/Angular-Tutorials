import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  counter :number =0;

  setCounter(value: number) {
    this.counter = value;
  }
}
