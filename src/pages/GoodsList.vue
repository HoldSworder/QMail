<template>
    <div>
      <nav-header></nav-header>
      <nav-bread></nav-bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price" @click="sortGoods">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop()">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" :class="{'filterby-show': filterBy}">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)" :class="{'cur':priceChecked == 'all'}" @click="priceChecked = 'all'">All</a></dd>
                <dd v-for="(item,index) in priceFilter" @click="setPriceFilter(index)">
                  <a href="javascript:void(0)" :class="{'cur':priceChecked == index}">{{`${item.startPrice} - ${item.endPrice}`}}</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="item in goodList">
                    <div class="pic">
                      <a href="#"><img v-lazy="`/static/${item.productImg}`" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.productPrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
      <nav-footer></nav-footer>
    </div>
</template>

<script>
  import './../assets/css/base.css'
  import './../assets/css/product.css'
  import NavHeader from '@/components/Header'
  import NavFooter from '@/components/Footer'
  import NavBread from '@/components/Bread'
  import axios from 'axios'
  export default{
    components: {
      NavHeader,
      NavFooter,
      NavBread
    },
    data() {
      return {
        sortFlag:true,
        filterBy: false,
        overLayFlag: false,
        goodList: [],
        priceFilter: [
          {
            startPrice: '0.00',
            endPrice: '500.00'
          },
          {
            startPrice: '500.00',
            endPrice: '1000.00'
          },
          {
            startPrice: '1000.00',
            endPrice: '2000.00'
          }
        ],
        priceChecked: 'all'
      }
    },
    methods: {
      getGoodsList() {
        axios.get('/goods').then(res => {
          this.goodList = res.data.result
        })
      },
      showFilterPop() {
        this.filterBy = true;
        this.overLayFlag = true
      },
      closePop() {
        this.filterBy = false;
        this.overLayFlag = false
      },
      setPriceFilter(index) {
        this.priceChecked = index;
        this.overLayFlag = false;
        this.filterBy = false;
      },
      sortGoods() {
        this.sortFlag = !this.sortFlag;
      }
    },
    mounted() {
      this.getGoodsList()
    }
  }
</script>