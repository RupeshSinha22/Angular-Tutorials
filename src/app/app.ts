import { Component, OnInit } from '@angular/core';
import { CounterService } from './shared/component/counter.service';
import { CounterA } from './counter-a/counter-a';
import { CounterB } from './counter-b/counter-b';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterA, CounterB],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.counterService.setCounter(100);
  }
}
