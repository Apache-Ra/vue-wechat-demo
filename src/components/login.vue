<template>
  <div id="Login">
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1>登录</h1>
    </div>

    <group>
      <x-input title="账号" v-model="userName"></x-input>
      <x-input title="密码" v-model="userPass"></x-input>
    </group>

    <group style="padding:5px 20px;">
      <x-button type="primary" action-type="button" @click.native="login">登录</x-button>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XInput, XButton } from 'vux'

  export default {
    components: {
      Group,
      Cell,
      XInput,
      XButton
    },
    data () {
      return {
        userName: '',
        userPass: ''
      }
    },
    methods: {
      login(){
        let vue = this
        vue.$router.push({name: 'userInfo', params: {}})
      }
    }
  }
</script>

<style>
  .vux-demo {
    text-align: center;
  }
  .logo {
    width: 100px;
    height: 100px
  }
</style>
