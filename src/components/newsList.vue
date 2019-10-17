<template>
  <div class="all">
    <div class="top">
      <div class="news-img">
        <img v-lazy="mitem.img.replace('w.h','160.100')" alt>
      </div>
      <div class="news-inf">
        <div class="title">
          <span>{{mitem.title}}</span>
        </div>
        <div class="other">
          <div class="date">日期:{{mitem.date}}&nbsp;&nbsp;</div>
          <div class="count">观看数:{{mitem.count}}</div>
        </div>
      </div>
    </div>
    <div class="buttom">
      <span class="cnt">{{mitem.content}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsList",
  props: ["mitem"], //通过mitem属性接收父组件的传值
  data() {
    return {};
  }
}
</script>

<style scoped>
.all{
  padding-top: 55px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  border: 1px solid #999;
  border-radius: 5%;
  margin-bottom: 1%;
}
.top{
  display: flex;
  justify-content: space-between;
}
.news-img img{
  width: 160px;
  height: 100px;
}

.news-inf{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2%;
}

.other{
  display: flex;
  justify-content: space-around;
  color: #aaa;
  font-size: 14px;
}

.title{
  font: 18px "黑体";
  color: #e54847;
}
</style>