<template>
    <div class="padding-bottom">
       <ul>
           <li v-for="item in this.$store.getters.comingListInfo"
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
                	<p class="actors text-overflow">主演：{{item.actors | actorfilter}}</p>
                	<p>
                    {{item.premiereAt}}
                  </p>
								</div>
           </li>
           <end></end>
       </ul>
    </div>
</template>

<script>
import '@/assets/styles/film.stylus'
import end from './End'

export default {
  data(){
    return{
      data:null
    } 
  },
  components:{
    end
  },
  mounted(){
    if(this.$store.state.comingList.length===0){
      this.$store.dispatch("getComingListAction")
    }else{
      } 
  },

  methods:{
    handleChangePage(id){
      // 名字跳转
      this.$router.push({name:'kerwindetail',params: {id } })
    },
	}
}
</script>

<style lang="stylus" scoped>
li 
  padding-bottom 1.5rem
.content
	margin-top .5rem

</style>