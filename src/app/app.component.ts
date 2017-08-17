import { Component, OnInit, Input } from '@angular/core';
import {UnoDeck, UnoCard, Player} from "./model/uno"
import {HeaderComponent} from "./header/header.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  counter: number;
  static PASSNUM: number;
  cards: UnoCard[] = [];
  //@Input() headercards: UnoCard[];
  deck: UnoDeck = new UnoDeck();
  plyr: Player[] = [];

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

  public getCounter(): number{
    return this.counter;
  }

  /*public draw7(){
    for (let i = 0; i < (7 * this.getCounter()); i++)
      this.cards[i] = this.deck.take();

  }*/

   public draw7(){
    for (let i = 0; i < this.getCounter(); i++) {
      this.plyr.push(new Player);
      this.plyr[i].playerNum.push(i + 1);
      for (let j = 0; j < 7; j++)
        //this.cards[i][j] = this.deck.take();
        this.plyr[i].cards.push(this.deck.take());
    }



  }

  goStart(){
    this.draw7();
  }
}
