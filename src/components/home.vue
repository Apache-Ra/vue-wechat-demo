<template>
  <div id="Home">
    
    <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>

    <grid>
      <grid-item :label="('Go to Cell')">
        <img slot="icon" src="static/home/grid_icon.png">
      </grid-item>
      <grid-item :label="('Go to Cell')">
        <img slot="icon" src="static/home/grid_icon.png">
      </grid-item>
      <grid-item @on-item-click="onItemClick">
        <img slot="icon" src="static/home/grid_icon.png">
        <span slot="label">{{('Go to Cell') }}</span>
      </grid-item>
      <grid-item :label="('Go to Cell')">
        <img slot="icon" src="static/home/grid_icon.png">
      </grid-item>
      <grid-item :label="('Go to Cell')">
        <img slot="icon" src="static/home/grid_icon.png">
      </grid-item>
      <grid-item @on-item-click="onItemClick">
        <img slot="icon" src="static/home/grid_icon.png">
        <span slot="label">{{('Go to Cell') }}</span>
      </grid-item>

      <grid-item :label="('Go to Cell')">
        <img slot="icon" src="static/home/grid_icon.png">
      </grid-item>
      <grid-item :label="('Go to Cell')">
        <img slot="icon" src="static/home/grid_icon.png">
      </grid-item>
      <grid-item @on-item-click="onItemClick">
        <img slot="icon" src="static/home/grid_icon.png">
        <span slot="label">{{('Go to Cell') }}</span>
      </grid-item>
    </grid>
  </div>
</template>

<script>
  import {Swiper, SwiperItem, Grid, GridItem, GroupTitle } from 'vux'
  const baseList = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/3.jpg',
    title: '送你一次旅行'
  }]

  const urlList = baseList.map((item, index) => ({
    url: 'http://m.baidu.com',
    img: item.img,
    title: `(可点击)${item.title}`
  }))
  export default {
    components: {
      Swiper,
      SwiperItem,
      Grid,
      GridItem,
      GroupTitle
    },
    data () {
      return {
        demo06_list: urlList,
        demo06_index: 0,
        swiperItemIndex: 1
      }
    },
    methods: {
      onItemClick () {
        console.log('on item click')
      },
      demo06_onIndexChange (index) {
        this.demo06_index = index
      }
    }
  }
</script>
<style>
  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  .swiper-demo-img img {
    width: 100%;
  }
</style>
