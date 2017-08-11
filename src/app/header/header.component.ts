import { Component, OnInit, Input } from '@angular/core';
import {UnoCard, UnoDeck } from "../model/uno";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  static PASSNUM: number = 7;
  deck: UnoDeck = new UnoDeck();
  @Input() headercards: UnoCard[];

  ngOnInit() {

  }
  /*start(){
    for (let i = 0;i < HeaderComponent.PASSNUM;i++) {
      console.log(HeaderComponent.PASSNUM);
      this.draw7();
    }
  }*/
  draw7(){
    for (let i = 0; i < 7; i++)
      this.headercards[i] = this.deck.take();
  }
}
