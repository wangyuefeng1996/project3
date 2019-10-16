<template>
  <div>
    <div class="top">
      <page-title >电影资讯</page-title>
    </div>
    <news-page></news-page>
  </div>
</template>

<script>
import newsPage from '@/components/newsPage'
export default {
  components: {
    newsPage,
  },
  data() {
    return {
      
    }
  },
}
</script>


<style scoped>
  .top{
    width: 100%;
    position: fixed;
    z-index: 9;
  }
</style>