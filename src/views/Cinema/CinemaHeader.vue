<template>
    <div id="chbox" class="tilte-box border-buttom">
        <span class="back tocity" 
				@click="toCity()">
					{{city}}
          <i class="iconfont">&#xe62e;</i>
				</span>
        <p class="tilte-p ">影院</p>
    </div>
</template>

<script>

export default {
    data(){
        return{
            city:'城市'
        }
    },
    mounted(){
        this.city = localStorage.getItem("cityName")
    },
    methods:{
        toCity(){
            this.$router.push('/city')
        }
    }
}
</script>

<style lang="stylus" scoped>
#chbox
	padding-top .1rem
	z-index 99
	position fixed
	top 0
	height 2.5rem
	background-color white
	p 
		line-height 2rem
.tocity
	left .8rem
	top .8rem
	font-size .65rem
	i 
		font-size .1rem
</style>