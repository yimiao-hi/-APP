<template>
  <div class="cinemapage" v-if="cinemainfo" >
    <!-- 返回cinema键 -->
    <router-link to="/cinema" tag="div" class="tilte-box">
      <i class="iconfont back">&#xe624;</i>
    </router-link>
    <!-- 电影院名字 -->
    <p class="cp-name">{{cinemainfo.name}}</p>
    <!-- 电影院服务 -->
    <!-- 如果该影院没有服务项，则不渲染该列表 -->
    <ul v-if="cpServices"
    class="orange cp-ul">
      <li 
      v-for="(item,index) in cinemainfo.services"
      :key="index">
      <!-- 点击进入服务详情页面 -->
        <span 
        @click="toServe()"
        class="serve-name cp-border">
          {{item.name}}
        </span>
      </li>
      <li @click="toServe()">
        <i id="cp-serve-icon" class="iconfont">&#xe62d;</i>
      </li>
    </ul>
    <!-- 地址 -->
    <div class="cp-address-box">
      <i id="cp-address-icon" class="iconfont">&#xe651;</i>
      <p class="cp-address text-overflow">{{cinemainfo.address}}</p>
    </div>
    <!-- 服务详情页 -->
    <serve :cpName="cpName" :cpServices="cpServices"></serve>
    <!-- 影评信息 -->
    <div>

    </div>
  </div>
</template> 

<script>
import axios from 'axios'
import 'styles/cinemaPage.stylus'
import serve from '../CinemaPage/Serve'
export default {
  data(){
    return{
      cinemainfo:null,
      cpName:null,
      cpServices:null,
      cpFilm:null
    }
  },
  beforeMount(){
			// 不显示菜单导航栏
				this.$store.commit("HideMaizuoTabbar",false)
	},
   mounted(){
        axios({
            url:`https://m.maizuo.com/gateway/?cinemaId=${this.$route.params.id}&k=2742968$`,
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15797681444157528347062","bc":"431000"}',
                'X-Host': 'mall.film-ticket.cinema.info'
            }
        }).then(res=>{
            this.cinemainfo = res.data.data.cinema
            this.cpName = this.cinemainfo.name
            this.cpServices = this.cinemainfo.services
            if(this.$store.state.cinemaPageVal){
            }else{
              this.$store.dispatch("getCinemaPageAction",this.cinemainfo.cinemaId)
              this.cpFilm = this.$store.getters.cinemaPageInfo
              console.log(this.cinemainfo.cinemaId,this.cpFilm)
            }
        })
    
   },
   methods:{
     toServe(){
      //  触发事件，显示服务详情页面
        this.$store.commit("isShowServeMutation")
     },
     
   },
   components:{
     serve
   },
    beforeDestroy(){
			// 离开当前组件，显示菜单导航栏
        this.$store.commit("HideMaizuoTabbar",true)
    }
}
</script>
<style lang="stylus" scoped>

</style>