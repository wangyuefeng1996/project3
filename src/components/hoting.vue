<template>
  <div>
    <loading v-if="!isReady"></loading>
    <div class="hoting">
      <!-- 
      使用组件：HTML 中的特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要在使用时要转换为其等价的 kebab-case (短横线分隔命名) 命名。
      :mitem="h_item" ==> 通过属性绑定向子组件动态传值 
      -->
      <movie-list v-for="(h_item,index) in hotList" :key="index" :mitem="h_item"></movie-list>
    </div>
  </div>
</template>

<script>
import movieList from "./movieList";
import axios from "axios";
// 导出组件
export default {
  name: "hoting",
  data() {
    return {
      isReady: false,
      hotList: []
    };
  },
  created() {
    axios
      .get("http://www.softeem.xin/maoyanApi/ajax/movieOnInfoList")
      .then(res => {
        this.hotList = res.data.movieList;
        this.isReady = true;
      });
  },
  components: {
    movieList
  }
};
</script>

<style scoped>
</style>