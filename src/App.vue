<template>
  <div id="app">
    <div>
      <div>
        <label for="">商品名</label>
        <input type="text" v-model="inputItemName">
      </div>
      <div>
        <label for="">金額(税抜き)</label>
        <input type="number" v-model.number="inputeItemPrice">円
      </div>
      <button @click="addItem">商品を追加</button>    
    </div>

    <h2>注文内容</h2>
    <span>3000円以上お買い上げで送料が無料!!</span>
    <table>
      <tr>
        <th>商品名</th><th>金額(税抜き)</th><th>金額(税込み)</th>
      </tr>
      <tr v-for="item in order.items" :key="item.itemName">
        <td>{{ item.name }}</td>
        <td>{{ item.price }}円</td>
        <td>{{ item.taxIncludedPrice }}円</td>
      </tr>      
      <tr>
        <td>送料</td>
        <td>{{ order.carriage }}</td>
      </tr>
      <tr>
        <td>合計金額</td>
        <td>{{ order.totalPrice }}円</td>
        <td>{{ order.taxIncludedTotalPrice }}円</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Order from './Order.js';
import Item from './Item.js';

export default {
  name: 'app',
  data() {
    return {
      inputItemName: "",
      inputeItemPrice: 0,
      order: new Order()
    }
  },
  methods: {
    // 商品の追加
    addItem() {
      if(!this.canAdd) {
        alert("商品名、価格を正しく入力してください");
        return
      }
      this.order.addItem(new Item(this.inputItemName, this.inputeItemPrice));      
    }
  },
  computed: {
    canAdd() {
      return this.inputItemName != "" && this.inputeItemPrice != 0;
    }
  }
}
</script>

<style>
</style>
