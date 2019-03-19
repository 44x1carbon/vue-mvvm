// カート
export default class Cart {
  constructor() {
    this.items = [];
  }

  // 商品の追加
  addItem(item) {
    this.items.push(item);
  }

  // 商品の合計金額(税抜き)
  get itemTotalPrice() {
    return this.items.reduce((p, c) => p + c.price, 0);
  }

  // 商品の合計金額(税込み)
  get taxIncludedItemTotalPrice() {
    return this.items.reduce((p, c) => p + c.taxIncludedPrice, 0);
  }

  // 送料無料になるか？
  get isFreeCarriage() {
    return this.itemTotalPrice >= 3000
  }

  // 送料
  get carriage() {
    return this.isFreeCarriage ? 0 : 300 
  }

  // カートの合計金額(税抜き)
  get totalPrice() {
    return this.itemTotalPrice + this.carriage;
  }

  // カートの合計金額(税込み)
  get taxIncludedTotalPrice() {
    return this.taxIncludedItemTotalPrice + this.carriage;
  }
}