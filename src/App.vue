<template>
  <div id="app">
    <tabbar v-show="isTabbarShow"></tabbar>
    <router-view/>
  </div>
</template>

<script> 
import tabbar from '@/components/Tabbar'
import {mapState} from'vuex'

export default {
  name: 'App',
  data(){
    return {
      isShow:true
      }
  },
  components:{
    tabbar
  },
  // computed:mapState(["isTabbarShow"])
    // isTabbarShow(){
    //   return this.$store.state.isTabbarShow
    // }
  computed:{
    ...mapState(["isTabbarShow"])//ES6展开合并运算符
  }
  // beforeMount(){
  //   bus.$on("maizuo",(data)=>{
  //     this.isShow = data
  //   })
  // }
}
</script>
