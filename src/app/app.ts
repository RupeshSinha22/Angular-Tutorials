import { Component } from '@angular/core';
import { Login } from './login/login';
@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  x=10;
  y=20;
  
  clickHandler(){
    console.log('Button clicked!');
  }
}
