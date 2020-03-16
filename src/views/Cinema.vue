<template>
    <div>
        <cinema-header></cinema-header>
				<div class="cinema">
					<ul>
						<li v-for="item in datalist"
           		:key="item.id"
            	class="border-buttom"
							@click="toCinemaPage(item.cinemaId)">
            		<p class="name">
									{{item.name}}								
									<span class="lowPrice">
										￥{{item.lowPrice | lowPrice}} 起
									</span>
								</p>
            		<p class="address text-overflow">{{item.address}}</p>
            	</li>
						</ul>  
				</div>
          
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import BScroll from 'better-scroll'
import cinemaHeader from './Cinema/CinemaHeader'
// 过虑，将接收到的lowPrice的值，单位转为元
Vue.filter('lowPrice', function(value) {
	var lowPrice = value / 100
	return lowPrice
})
export default {
    data(){
        return{
            datalist:[]
        }
    },
    mounted(){
            var id = localStorage.getItem("cityId")
        axios({
            url:`https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=3599988`,
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15797681444157528347062","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res=>{
            this.datalist = res.data.data.cinemas
            // this.$nextTick(()=>{
            // localStorage.setItem("1701", id);
            // })
        })
        
    },
    components:{
        cinemaHeader
		},
		methods:{
			toCinemaPage(id){
        this.$router.push({name:'cinemaPage',params:{id}})
			}
		}
}
</script>

<style lang="stylus" scoped>
@import '~styles/mystyl.styl'

.cinema li 
    padding .7rem
    font-size .7rem
		.address
			width 10rem
			font-size .6rem
			color:#787878;
		.lowPrice
			text-align right 
			float right 
			font-size .6rem
			color red

.cinema
	margin $tilteHeight 0 $tabbarHeight

.name
	line-height 1.7rem
	font-size .8rem

</style>