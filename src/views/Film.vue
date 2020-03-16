<template>
    <div>
       <filmheader></filmheader>
       <filmheader :class="isFilmFixed?'film-fixed':'display-none'"></filmheader>
       <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios'
import filmheader from '@/views/Film/FilmHeader'
import '@/assets/styles/film.stylus'

export default {
    name:'Film',
    components:{
        filmheader
    },
    data(){
        return {
            isFilmFixed:false
        }
    },
    mounted(){
        window.onscroll = this.handleScroll;
    },
    beforeDestroy(){
        // 离开当前组件，解绑事件
        window.onscroll = null
    },
    methods:{
        handleScroll(){
            if(document.documentElement.scrollTop >= 100){
                this.isFilmFixed = true
            }else{
                this.isFilmFixed = false
            }
        }
        
    }
}
</script>

<style lang="stylus" scoped>
.swiper
  overflow hidden
  height 15rem
  img
    width 100%
</style>