export default class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  get itemTotalPrice() {
    return this.items.reduce((p, c) => p + c.price, 0);
  }

  get taxIncludedItemTotalPrice() {
    return this.items.reduce((p, c) => p + c.taxIncludedPrice, 0);
  }

  get isFreeCarriage() {
    return this.itemTotalPrice >= 3000
  }

  get carriage() {
    return this.isFreeCarriage ? 0 : 300 
  }

  get totalPrice() {
    return this.itemTotalPrice + this.carriage;
  }

  get taxIncludedTotalPrice() {
    return this.taxIncludedItemTotalPrice + this.carriage;
  }
}