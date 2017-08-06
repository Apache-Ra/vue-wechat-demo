<template>
  <div id="Top">
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"
              :left-options="{showBack: showBack, backText: ''}" :right-options="{showMore: true}"
              @on-click-more="showMenus = true">{{title}}
    </x-header>

    <div v-transfer-dom>
      <popup v-model="showMenus" position="right">
        <div style="width:200px;">
          <group>
            <cell v-for="(menu,value) in menuList" :title="menu.title" :value="menu.value"
                  @click.native="goToUrl(menu.url)" :class="menu.class" v-bind:key="menu.key"></cell>
          </group>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {XHeader, TransferDom, Popup, Group, Cell, cookie} from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Popup,
      Group,
      Cell
    },
    computed: {
      ...mapState({
        showBack: state => state.vux.showBack,
        title: state => state.vux.title
      })
    },
    data () {
      return {
        menuList: [
          {title: 'userInfo', value: '', url: '/userInfo'},
          {title: '', value: 'userInfo', url: '/userInfo', class: 'menu'},
          {title: 'userInfo', value: '', url: '/userInfo'},
          {title: '', value: 'userInfo', url: '/userInfo', class: 'menu'}
        ],
        showMenus: false
      }
    },
    methods: {
      goToUrl(path) {
        if (path) {
          console.log(path)
        }
        let vue = this
      }
    }
  }
</script>
<style>
  *{font-size: 14px}
  #Top .vux-header-title {
    font-size: 16px;
  }
  #Top .menu {
    margin-right: 70px;
  }
  #Top .menu div {
    color: #000;
  }
  #Top .menu:before {
    right: -70px;
  }
</style>
