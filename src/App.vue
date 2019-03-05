<template>
  <div id="app">
    <div>
      <div>
        <label for="">商品名</label>
        <input type="text" v-model="itemName">
      </div>
      <div>
        <label for="">金額(税抜き)</label>
        <input type="number" v-model.number="itemPrice">円
      </div>
      <button @click="addItem">商品を追加</button>    
    </div>
    <table>
      <tr>
        <th>商品名</th><th>金額(税抜き)</th><th>金額(税込み)</th>
      </tr>
      <tr v-for="item in items" :key="item.itemName">
        <td>{{ item.itemName }}</td>
        <td>{{ item.itemPrice }}円</td>
        <td>{{ item.itemPrice * 1.08 }}円</td>
      </tr>      
      <tr>
        <td>送料</td>
        <td>{{ carriage }}</td>
      </tr>
      <tr>
        <td>合計金額</td>
        <td>{{totalPlace}}円</td>
        <td>{{totalPlace * 1.08}}円</td>
      </tr>
    </table>
  </div>
</template>

<script>

const DEFAULR_CARRIAGE = 300;

export default {
  name: 'app',
  data() {
    return {
      itemName: "",
      itemPrice: 0,
      items: [],
      
    }
  },
  methods: {
    addItem() {
      this.items.push({
        itemName: this.itemName,
        itemPrice: this.itemPrice
      })
    }
  },
  computed: {
    itemTotalPlace() {
      return this.items.reduce((p, c) => {         
        return p + c.itemPrice;
      }, 0);
    },
    totalPlace() {
      return this.itemTotalPlace + this.carriage;
    },
    carriage() {
      return this.itemTotalPlace >= 3000 ? 0 : DEFAULR_CARRIAGE;
    }
  }
}
</script>

<style>
</style>
