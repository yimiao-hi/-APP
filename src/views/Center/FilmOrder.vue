<template>
  <div class="film-order">
    <!-- 头部 -->
    <div>
      <router-link to="/center" tag="span">
        <i class="iconfont back">
          &#xe624;
        </i>
      </router-link>
      <p class="tilte-p fo-tilte">电影订单</p>
    </div>
    <!-- 订单内容 -->
    <div class="order-box">
      <img src="data:image/png;base64,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" alt="">
      <div class="no-text">
        <p>去挑一些喜欢的商品吧</p>
      </div>
      <!-- 返回首页按钮 -->
      <router-link to="/newplaying" tag="button" class="index-button">
      首页
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
   beforeMount(){
			// 不显示菜单导航栏
				this.$store.commit("HideMaizuoTabbar",false)
		},
    beforeDestroy(){
			// 离开当前组件，显示菜单导航栏
        this.$store.commit("HideMaizuoTabbar",true)
    }
}
</script>
<style lang="stylus" scoped>
.film-order
  position relative
  width 100%
  height 100%
// 订单部分
.order-box
  position absolute
  top 4rem
  left 50%
  transform translateX(-50%)
  background-color white
  img  
    width 4rem
    height 4rem
    position absolute
    left 50%
    transform translateX(-50%)
  .no-text
    position absolute
    top 5.2rem
    left 50%
    transform translateX(-50%)
    width 10rem
    height 1rem
    p  
      text-align center
      color #878787
      font-size .65rem
// 返回首页按钮
.index-button
  position absolute
  top 7.5rem
  left 50%
  transform translateX(-50%)
  width 6.5rem
  padding .4rem
  border .05rem red solid 
  font-size .7rem
  color red
</style>