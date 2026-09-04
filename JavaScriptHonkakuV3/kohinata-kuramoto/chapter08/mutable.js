class Player {
  #name = '';
  #cards; // 手札
  constructor(name, cards) {
    this.#name = name;
    this.#cards = JSON.parse(JSON.stringify(cards));
    Object.freeze(this);
  }
  get name() {
    return this.#name;
  }
  get cards() {
    return JSON.parse(JSON.stringify(this.#cards));
  }
}

Object.freeze(Player.prototype);

class CardsView {
  static printCards(cards) {
    for (const card of cards) {
      console.log(card);
    }
  }
}

const globalCards = ['Heart 5', 'Spade J', 'Clud K'];
const player1 = new Player('Smith', globalCards);
console.log('---- 最初の手札 ---');
const cards = player1.cards;
CardsView.printCards(cards);

console.log('---- 外に取り出した手札にカードを追加 ---');
cards.push('Diamond 6');
CardsView.printCards(cards);

console.log('--- 外部の操作がPlayerの手札には影響しない ---');
CardsView.printCards(player1.cards);

console.log('--- コンストラクタで手札を受け取る時もDeep Copyして受け取る ---');
globalCards.push('Heart Q');
CardsView.printCards(player1.cards);


