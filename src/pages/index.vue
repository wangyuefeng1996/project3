<template>
  <div>
    <van-tabbar v-model="active" inactive-color="#a8a8a8" active-color="#e54847">
      <van-tabbar-item v-for="(item,index) in tabbars" :key="index">
        <span>{{item.title}}</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? item.icon.active : item.icon.normal"
        >
      </van-tabbar-item>
    </van-tabbar>
    <movie v-if="showNo==0"></movie>
    <news v-else-if="showNo==1"></news>
    <mine v-else="showNo==2"></mine>
  </div>
</template>

<script>
import movie from './movie';
import news from './news';
import mine from './mine';
export default {
  name:"index",
  data() {
    return {
      active:0,
      showNo:0,
      tabbars:[
        {
          title:"电影",
          icon:{
            normal:require("../assets/img/movie-normal.png"),
            active:require("../assets/img/movie-active.png"),
          },
        },
        {
          title:"资讯",
          icon:{
            normal:require("../assets/img/news-normal.png"),
            active:require("../assets/img/news-active.png"),
          },
        },
        {
          title:"我的",
          icon:{
            normal:require("../assets/img/mine-normal.png"),
            active:require("../assets/img/mine-active.png"),
          },
        },
      ],
    }
  },
  methods: {
    
  },
  components:{
    movie,news,mine,
  },
  updated() {
    if (this.active == 0) {
      this.showNo=0;
    } else if (this.active == 1) {
      this.showNo=1;
    } else if (this.active == 2) {
      this.showNo=2;
    } 
  },
}
</script>

<style scoped>
  .van-tabbar{
    background:#f3f3f3;
  }
  .van-tabbar-item--active{
    border-top:1px solid #e54847;
  }
</style>