<template>
  <div class="detail-tilte"
		:class="isShowTilte?'show-tilte':''">
		<span
			class="back back-icon"
			@click="handleBack()">
      <i class="iconfont">&#xe624;</i>
		</span>
		<p 
			v-show="isShowTilte"
			class="tilte-p">
			{{headerTitle}}
		</p>
	</div>  
</template>
<script>
import 'styles/detail.stylus'

export default {
  data(){
    return{
      isShowTilte:false,
    }
  },
  props:{
    headerTitle:String
  },
  mounted(){
    // 滚动条事件绑定
		window.onscroll = this.handleScroll;
  },
  methods:{
    // 页面下滑，头部固定定位
			handleScroll(){
            if(document.documentElement.scrollTop >= 50){
                this.isShowTilte = true
            }else{
                this.isShowTilte = false
            }
			},
    // 返回上一层
			handleBack(){
        this.$router.push('/film/nowplaying')
			},
  },
  beforeDestroy(){
    // 离开当前组件，解绑事件
    window.onscroll = null
  }
}
</script>