// 商品
export default class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // 税込価格
  get taxIncludedPrice() {
    return this.price * 1.08;
  }
}