<template>
    <div class="swiper-container filmswiper">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'

export default {
    props:[
        "perview","myclass"
    ],
    mounted(){
        new Swiper('.'+this.myclass,{
            slidesPerView: this.perview,
            spaceBetween: this.myclass==='actorswiper'?20:10,
            freeMode: true
        })
    }
}
</script>

<style lang="stylus" scoped>
.swiper-wrapper
  width 100%
    
.actorswiper,.photoswiper
  padding-bottom 1rem
  overflow hidden

.actorswiper img,.photoswiper img
  width 100%  

</style>