// <item>

Vue.component('item', {
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  template: `
    <li class="item">
      <div class="item-fav-icon">{{ item.isFav ? "😊" : "☹️" }}</div>
      <img class="item-image" v-bind:src="item.imageSrc" alt="">
      <div>{{ item.brand }}</div>
      <div class="item-color">{{ item.color }}</div>
    </li>
  `
})

// <items>

Vue.component('items', {
  template: `
    <ul class="item-list">
      <item 
        class="item"
        v-for="purse in purses"
        :item="purse"
        :key="purse.id"
        @click="toggleFav()"
      >
      </item>
    </ul>
  `,
  data () {
    return {
      message: 'Buy a new purse',
      purses: [
        { id: 0, brand: 'Bao Bao', color: 'Classic Silver', imageSrc: '/assets/issey.jpeg', isFav: true },
        { id: 1, brand: 'Longchamp', color: 'Grass Khaki', imageSrc: '/assets/longchamp.jpeg', isFav: false },
        { id: 2, brand: 'Coach', color: 'Lychee Black', imageSrc: '/assets/coach.jpeg', isFav: true },
        { id: 3, brand: 'Louis Vuitton', color: 'Shiny Nude', imageSrc: '/assets/alma.jpeg', isFav: true },
        { id: 4, brand: 'Chanel', color: 'Black Fabric', imageSrc: '/assets/leboy.png', isFav: false },
        { id: 5, brand: 'Louis Vuitton', color: 'Pink', imageSrc: '/assets/girolata.png', isFav: false }
      ]
    }
  }
})

// <app>

const app = new Vue({
  el: '#app',
  template: `
    <div>
      <p>PURSES</p>
      <items></items>
    </div>
  `
})
