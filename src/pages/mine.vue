<template>
  <div>
    <div class="top">
      <page-title style="height:150px;position:relative;">个人中心</page-title>
      <div class="all">
        <!-- 登录/注册 -->
        <div class="login-register">
        <!--头像(默认)-->
          <i class="iconfont">&#xe634;</i>
          <!--登录前-->
          <div class="login-want" v-if="isLogin==1">
            <span>欢迎! ****</span>
          </div> 
          <!--登录后-->
          <div class="login-ready" v-else>
            <a>登录</a>&nbsp;/&nbsp;
            <a>注册</a>
          </div> 
        </div>
        <ul class="list-item">
          <li>
            <div>
              <img src="../assets/img/dingdan.png" alt="">
              <span>我的订单</span>
              <img class="right" src="../assets/img/right.png" alt="">
            </div>
          </li>
          <li>
            <div>
              <img src="../assets/img/xiangkan.png" alt="">
              <span>想看列表</span>
              <img class="right" src="../assets/img/right.png" alt="">
            </div>
          </li>
          <li>
            <div>
              <img src="../assets/img/jifen.png" alt="">
              <span>我的积分</span>
              <img class="right" src="../assets/img/right.png" alt="">
            </div>
          </li>
          <li>
            <div>
              <img src="../assets/img/faxian.png" alt="">
              <span>更多发现</span>
              <img class="right" src="../assets/img/right.png" alt="">
            </div>
          </li>
        </ul>
        <div class="quit" v-show="isLogin==1">退出登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin:1,
    }
  },
}
</script>


<style scoped>
  .all{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 105px;
    width: 100%;
  }
  .top{
    width: 100%;
    position: fixed;
    z-index: 9;
  }

  .login-register{
    padding:1rem;
    width:96%;
    display: flex;
    align-items: center;
    background: #ffffff;
    border-radius: 5%;
    border: 1px solid #fff;
    box-shadow: 0px 0px 5px -2px;
  }

  .login-register a{
    font: 18px Arial;
    color: #666;
  }

  .iconfont{
    color: #ef4238;
    font-size: 40px;
    margin-right: 5%; 
  }

  .list-item{
    width:96%;
    background: #ffffff;
    border-radius: 5%;
    border: 1px solid #fff;
    box-shadow: 0px 0px 5px -2px;
    margin-top: 1rem;
  }

  .list-item li+li{
    border-top: 1px solid #ccc;  
  }

  .list-item div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font: 16px Arial;
    padding: 1rem;
  }

  .quit{
    padding: 1rem;
    width:96%;
    background: #ffffff;
    border-radius: 5%;
    border: 1px solid #fff;
    box-shadow: 0px 0px 5px -2px #000;
    text-align: center;
    color: #ef4238;
    font: 18px Arial;
    margin-top: 1rem;
  }
</style>