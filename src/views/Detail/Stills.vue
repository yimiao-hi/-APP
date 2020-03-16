<template>
  		<!-- 所有剧照页面 -->
    <div
   	class="allPhotos-page">
			<span class="back" 
      @click="handleShowStills()">
        <i class="iconfont">&#xe624;</i>
      </span>	
      <p class="tilte-p">剧照（{{photosAll}}）</p>
      <div 
         class="stills-photos-box">
        <img
          v-for="(item,index) in photosSrc"
         :key="index" 
         :src="item" alt="" 
         @click="showStillsSwiper()">
      </div>
			
		</div>
</template>
<script>
import 'styles/stills.stylus'
import vuex from 'vuex'

export default {
  data(){
    return{
    }
  },
  props:{
    photosSrc:Array,
    photosAll:Number,
  },
  methods:{
    handleShowStills(){
      // 改变isStills的值
      this.$store.commit("isStillsMutation")
      
    },
    showStillsSwiper(){
      // 改变StillsSwiper
      this.$store.commit("StillsSwiperMutation")
    }
  }
}
</script>