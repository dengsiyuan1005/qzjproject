<template>
  <div id="app">
    <ul class="nav-list" v-if="$route.meta.showTab">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/Member/member">VIP</router-link></li>
      <li><router-link to="/Quiz">竞猜</router-link></li>
      <li><router-link to="/Winter">冬奥</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100vh;
  .nav-list {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    background: #333333;
    a {
      color: white;
      line-height: 60px;
      margin-left: 30px;
    }
    a:hover {
      color: red;
    }
  }
}
</style>
