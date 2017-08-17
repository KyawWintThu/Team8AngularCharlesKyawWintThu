import { Component, OnInit, Input } from '@angular/core';
import {UnoCard, UnoDeck } from "../model/uno";
import {AppComponent} from "../app.component"


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
    for (let i = 0;i < ;i++) {
      console.log(HeaderComponent.PASSNUM);
      this.draw7();
    }
  }*/




}
