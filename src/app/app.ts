import { Component } from '@angular/core';
import { Login } from './login/login';
@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count:number = 0

  handleIncreament(){
    this.count+=1;
  }

  handleDecreament(){
    this.count-=1;
  }

  handleReset(){
    this.count = 0;
  }
}
