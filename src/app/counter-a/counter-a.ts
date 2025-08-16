import { Component } from '@angular/core';
import { CounterService } from '../shared/component/counter.service';


@Component({
  selector: 'app-counter-a',
  imports: [],
  templateUrl: './counter-a.html',
  styleUrl: './counter-a.css'
})
export class CounterA {
  constructor(public counterService: CounterService) {}
  clickHandler(){
    this.counterService.counter+=1;
  }
}
