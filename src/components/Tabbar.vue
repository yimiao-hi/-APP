<template>
  <div id="tabbar">
    <nav>
        <ul>
            <router-link to="/film" tag="li" activeClass="myactive">
              <i class="iconfont">&#xe654;</i>
              <p>电影</p>
            </router-link>
            <router-link to="/cinema" tag="li" activeClass="myactive">
              <i class="iconfont">&#xe602;</i>
              <p>影院</p>
            </router-link>
            <router-link to="/center" tag="li" activeClass="myactive">
              <i class="iconfont">&#xe64c;</i>
              <p>我的</p>
            </router-link>
        </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'tabbar',
  
}
</script>
<style lang="stylus" scoped>
  nav
    position fixed 
    bottom 0
    width 100%
    height $tabbarHeight
    ul
      display flex
      justify-content space-around
      li
        padding .4rem 0
        z-index 99
        flex 1
        text-align center
        font-size .6rem
        color #787878
.myactive
  color:red

i 
  font-size 1rem
</style>
 