<template>
  <div class="app-wrapper">
    <side-bar></side-bar>
    <Header></Header>
    <div style="margin-left: 200px; margin-top: 50px; padding: 20px 15px; min-width: 1200px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import SideBar from './sideBar'
  import Header from './header'

  export default {
    name: 'Layout',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      SideBar,
      Header
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
