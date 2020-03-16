<template>
	<div class="padding-bottom">
  	<ul>
    	<li v-for="item in $store.state.nowList" 
      	:key="item.filmId"
      	@click="handleChangePage(item.filmId)"
      	class="border-buttom flim-li">
        	<div class="poster">
          	<img :src="item.poster"/>
          </div>
          <p class="movie">
              {{item.name}}
              <span class="filmType">{{item.filmType.name}}</span>
          </p>
          <div class="content">
            <p>观众评分：<span class="grade">{{item.grade}}</span></p>
            <p class="actors text-overflow">主演：{{item.actors | actorfilter}}</p>
            <p>{{item.nation}} | {{item.runtime}}分钟</p>
						<button
            @click.stop="handleToCinnemas(item.filmId)">
							购票
						</button> 
          </div>
      </li>
			<end></end>
    </ul>
	</div>
</template>

<script>
import Vue from 'vue'
import end from './End'
import 'styles/film.stylus'
import 'styles/nowplaying.stylus'

// 自定义过滤器 
// 返回主演名单
Vue.filter("actorfilter",function(data){
    var newlist = data.map(item=>item.name)
    return newlist.join(' ')
})
export default {
    data(){
        return{
            loading:true
        }
	},
	components:{
        end
  	},
   	mounted(){
        if(this.$store.state.nowList.length===0){
            this.$store.dispatch("getNowListAction")
        }else{
        }
    },
    methods:{
        handleChangePage(id){
            // 点击之后把点击目标的id传给路由，进行跳转
            this.$router.push({name:'kerwindetail',params: {id } })
				},
				handleToCinnemas(id){
          this.$router.push({name:'cinemas',params: {id } })
				}
    }
}
</script>
