<template>
    <div id="UserInfo">
      <blur :blur-amount=40 :url="url">
        <p class="center"><img :src="url"></p>
      </blur>

      <group>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
        <cell title="title" value="value"></cell>
      </group>

      <group>
        <cell title="version" value="1.0.0"></cell>
      </group>
    </div>
</template>

<script>
  import {Group, Cell,  Blur } from 'vux'
  export default {
    components: {Group, Cell, Blur},
    data () {
      return {
        url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
      }
    },
    created () {
      let vue = this
      vue.updateTitle('userInfo');
    }
  }
</script>

<style>
  #UserInfo .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
  }
  #UserInfo .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }
</style>
