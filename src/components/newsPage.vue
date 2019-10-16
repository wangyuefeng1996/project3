<template>
  <div>
    <div class="main">
      <news-list v-for="(h_item,index) in newList.data" :key="index" :mitem="h_item"></news-list>
    </div>
  </div>
</template>

<script>
import newsList from "./newsList";
import newsInfoList from '../json/newsInfoList.json';
import axios from "axios";
export default {
  name:"newspage",
  data() {
    return {
      newList:newsInfoList,
    }
  },
  components:{
    newsList,
  }
}
</script>

<style scoped>
  .main{
    padding-top: 55px;
    padding-bottom:55px;
  }
</style>