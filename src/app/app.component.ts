import { Component, OnInit } from '@angular/core';
import {UnoDeck, UnoCard} from "./model/uno"
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  counter: number;
  static PASSNUM: number;
  cards: UnoCard[] = [];

  ngOnInit(){
    this.counter = 2;
  }
  public increment(): void{
    if (this.counter < 7){
      this.counter++;
      this.callCounter();
    }
    if (this.counter > 7){
      this.counter = 7;
      this.callCounter();
    }
  }

  public decrement(): void{
    if (this.counter > 2){
      this.counter--;
      this.callCounter();
    }
    if (this.counter < 2){
      this.counter = 2;
      this.callCounter();
    }
  }
  public callCounter():void{
    AppComponent.PASSNUM = this.counter;
    console.log(this.counter);
  }
}
