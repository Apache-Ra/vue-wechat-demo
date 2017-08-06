<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {Loading} from 'vux'
  import {mapState} from 'vuex'

  export default {
    name: 'app',
    components: {
      Loading
    },
    computed: {
      ...mapState({
        isLoading: state => state.vux.isLoading
      })
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }
</style>
