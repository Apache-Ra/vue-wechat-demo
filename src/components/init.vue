<template>
  <div id="Init">
    <top class="top"></top>
    <transition>
      <router-view></router-view>
    </transition>
    <bottom></bottom>
  </div>
</template>

<script>
  import Top from './layouts/top.vue'
  import Bottom from './layouts/bottom.vue'
  export default {
    components: { Top, Bottom}
  }
</script>

<style>
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  #Init .top{margin-bottom: 46px;}
</style>
