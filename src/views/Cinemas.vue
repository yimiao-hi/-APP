<template>
  <div v-if="filminfo" class="cinemas">
    <div 
    :class="isFixed?'fixed':''" 
    class="cinemas-header tilte-box">
      <router-link to="/film/nowplaying" tag="i" class="back iconfont">
        &#xe624;
      </router-link>
			<p class="tilte-p">
        {{filminfo.name}}
      </p>
      <router-link to="/cinema" tag="span" class="search">
        影院
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data(){
    return{
      isFixed:false,
      filminfo:null
    }
  },
  beforeMount(){
    // 导航栏隐藏
    this.$store.commit("HideMaizuoTabbar",false)
  },
  mounted(){
    // 绑定滚动条事件事件
    window.onscroll = this.handleScroll;
    axios({
      url:`https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=7426859&`,
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15797681444157528347062","bc":"440100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res=>{
      this.filminfo = res.data.data.film
    })
  },
  beforeDestroy(){
    this.$store.commit("HideMaizuoTabbar",true);
    // 解绑滚动条事件
    window.onscroll = null
  },
    methods:{
      handleScroll(){
            if(document.documentElement.scrollTop >= 250){
              this.isFixed = true
            }else{
              this.isFixed = false
            }
      },
      handleBack(){
        this.$router.push({name:'cinemas',params: {id } })
        },
    },
}
</script>