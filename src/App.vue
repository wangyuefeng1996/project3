<template>
  <div id="app">
  <!--
    <img src="./assets/logo.png">
    <router-view/>
  -->
    <keep-alive>
      <!-- 当前路由会被缓存 -->
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

  *{
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing:border-box;
  }
</style>
