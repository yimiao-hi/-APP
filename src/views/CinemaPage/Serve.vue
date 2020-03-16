<template>
  <div 
  class="serve"
  v-show="this.$store.getters.isShowServeInfo">
  <div class="tilte-box">
    <span class="back"
    @click="backCinemaPage()">
      <i class="iconfont">&#xe603;</i>
    </span>
  </div>
  <!-- 电影院名字 -->
  <p class="cp-name">{{cpName}}</p>
  <!-- 服务详情 -->
  <div 
  v-for="(item,index) in this.cpServices"
  :key="index"
  class="serve-text-box">
      <span class="serve-name cp-border orange">{{item.name}}</span>
      <div class="serve-description">{{item.description}}</div>
  </div>
  </div>
</template>
<script>
import 'styles/cinemaPage.stylus'

export default {
  props:{
    cpName:String,
    cpServices:Array
  },
  methods:{
    backCinemaPage(){
      //  触发事件，显示服务详情页面
      this.$store.commit("isShowServeMutation")
    }
  }
}
</script>
<style lang="stylus" scoped>
.serve
  position fixed
  top 0
  width 100%
  height 100%
  background-color white
  font-size .55rem
// 服务详情盒子
.serve-text-box
  position relative
  margin 1rem 0 .5rem 2rem
  // 服务项
.serve-text-box>span
  position absolute
  top 0
  // 服务介绍
.serve-description
  display inline-block
  width 12rem
  color #878787
  padding-left 3.5rem
</style>