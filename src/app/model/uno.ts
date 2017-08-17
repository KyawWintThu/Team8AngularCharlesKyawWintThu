export interface UnoCard{
  value: number;
  colour: string;
  imageUrl: string;
}
/*export interface UnoPlayer{
  value: number;
}*/

export class UnoDeck{
  private static COLOURS: string[] = ["red","green", "blue", "yellow"];
    private cards: UnoCard[]=[];
      constructor() {
        // Create the deck
        //
        let prefix: string = "0";
        for (let i = 0; i < 2; i++) {
          for (let c = 0; c < UnoDeck.COLOURS.length; c++) {
            for (let j = 0; j < 12; j++) {
              prefix = "0"
              if (j < 10)
                prefix = prefix + j;
              else
                prefix = j + "";
              this.cards.push({
                value: j + 1,
                colour: UnoDeck.COLOURS[c],
                imageUrl: "/assets/uno_deck/c" + c + "_" + prefix + ".png"
              })
            }
          }
    }
    //this.shuffleCards();
    this.shuffleCards1(this.cards);
  }
  private shuffleCards1(cards): void  {
      for (let x = cards.length - 1; x > 0; x--) {
        let y = Math.floor(Math.random() * (x + 1));
        let temp = cards[x];
        cards[x] = cards[y];
        cards[y] = temp;
      }
      return cards;
    }
  private shuffleCards(times:number = 5):void {
    function getRandomCard(min, max){
      return Math.floor(Math.random() * (max - min +1) + min);
    }
    for (let i = 0; i <times; i++){
      for (let j = 0; j < this.cards.length; j++){
        let p1: number = getRandomCard(1, this.cards.length -1);
        let p2: number = getRandomCard(1, this.cards.length -1);

        let t: UnoCard = this.cards[p1];
        this.cards[p1] = this.cards[p2];
        this.cards[p2] = t;

      }
    }
  }
  public take(): UnoCard{
      return (this.cards.pop());
  }


}

export class Player{
  public cards: UnoCard[]=[];
  public playerNum: number[] =[];
}
