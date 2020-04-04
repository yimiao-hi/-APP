<template>
  <div 
	v-show="this.$store.getters.StillsSwiperInfo"
  class="stills-Swiper">
			<!-- 头部 -->
      <div @click="showStillsSwiper()"
      class="ss-back">
        X
      </div>
			<!-- 轮播图 -->
        <mt-swipe :auto="0">
          <mt-swipe-item  
          v-for="(item,index) in photosSrc"
          :key="index" ref="index">
              <img :src="item" alt="">
          </mt-swipe-item>
        </mt-swipe>

    </div>
</template>
<script>
import 'swiper/css/swiper.css'
import 'styles/stillsSwiper.stylus'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data(){
    return{
      imgIndex:null
    }
  },
  props:{
    photosSrc:!null,
    photosAll:Number
  },
  methods:{
   showStillsSwiper(){
      // 改变StillsSwiper
      this.$store.commit("StillsSwiperMutation")
      console.log(123)
   }
 }
}
</script>