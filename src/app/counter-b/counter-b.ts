import { Component } from '@angular/core';
import { CounterService } from '../shared/component/counter.service';

@Component({
  selector: 'app-counter-b',
  imports: [],
  templateUrl: './counter-b.html',
  styleUrl: './counter-b.css'
})
export class CounterB{
  constructor(public counterService: CounterService) {}
}
