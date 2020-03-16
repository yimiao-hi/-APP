<template>
	<div class="scroll-prohibit">
<!-- filminfo为空|还没接收到数据，不渲染 -->
		<div v-if="filminfo" 
		class="detail"
		:class="this.$store.getters.isStillsInfo?'':'scroll-prohibit'">
				<!-- header组件 -->
				<detail-header 
				:headerTitle="filminfo.name">
				</detail-header>
				<!-- 页面第一张图片 -->
        <div class="posterbox">
            <img :src="filminfo.poster" alt="">
        </div>
				<!-- 电影简介 -->
        <div class="introduction">
					<div class="title">
						<span>{{filminfo.name}}</span>
						<span class="filmType">{{filminfo.item.name}}</span>
						<span class="grade mygrade">{{filminfo.grade}}</span>
					</div>
          <!-- <p>{{filminfo.category | categoryfilter}}</p> -->
          <p>{{filminfo.category}}</p>
					<p>{{Data}}上映</p>
					<p>{{filminfo.nation}} | {{filminfo.runtime}}分钟</p>
					<div 
					class="synopsis"
					:class="synopsisStyle?'synopsisHeight':''">
						<p>{{filminfo.synopsis}}</p>
					</div>
        </div>
				<!-- 下拉显示所有电影简介 -->
				<div id="synopsisIcon"
				class="down"
				@click="handeleDown()">
					<i v-show="showDown"
						class="iconfont">&#xe62e;</i>
					<i v-show="!showDown"
						class="iconfont">&#xe630;</i>
				</div>

				<!-- 演员介绍 -->
				<div class="actors-box">
					<p>演职人员</p>
					<swiper perview="4" class="actorswiper" myclass="actorswiper">
							<div class="swiper-slide" 
							v-for="(item,index) in filminfo.actors"
							:key="index">
									<div class="actor-photos-box">
										<img :src="item.avatarAddress">
									</div>
									<div class="actor-name-box">
										<p>{{item.name}}</p>
										<span>{{item.role}}</span>
									</div>
							</div>
					</swiper>
				</div>
				<!-- 剧照 -->
  <div>
    <div class="photos">
			<p>
				剧照
				<span v-if="!photosNull" 
				@click="handleShowStills()">
					全部（{{photosAll}}）
					<i id="stillsIcon"
					 class="iconfont">&#xe62d;</i>
				</span>
			</p>
			<swiper perview="2" class="photoswiper" myclass="photoswiper">
         <div class="swiper-slide" 
         v-for="(item,index) in filminfo.photos"
         :key="index">
             <div class="photos-box">
		        <img :src="item" alt="" @click="showStillsSwiper()">
						</div>
         </div>
     	</swiper>
			 <!-- 提示没有剧照 -->
			 <div v-if="photosNull"
			 class="photos-box-null">
				<p>暂无电影剧照</p>
			</div>
		</div>
  	</div>
				<!-- 购票 -->
				<div 
				v-if="isSale"
				class="purchase"
				@click="handleToCinnemas(filminfo.filmId)">
					<span>选座购票</span>
				</div>
    </div>
		<!-- 剧照 -->
		<stills
		v-show="this.$store.getters.isStillsInfo" 
		:photosSrc="photosSrc"
		:photosAll="photosAll">
		</stills>
    <!-- 黑色背景轮播剧照页面 -->
		<stills-swiper
			v-show="this.$store.getters.StillsSwiperInfo"
			:photosAll="photosAll" 
			:photosSrc="photosSrc">
		</stills-swiper>
	</div>
</template>

<script>
import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import BScroll from 'better-scroll'
import { MessageBox } from 'mint-ui'
import 'styles/detail.stylus'
// 组件
import detailHeader from './Detail/DetailHeader'
import swiper from './Detail/DetailSwiper'
import stills from './Detail/Stills'
import stillsSwiper from './Detail/StillsSwiper'
export default {
    data(){
        return{
					filminfo:null,
					synopsisStyle:false,
					fixed:false,
					photosSrc:null,
					photosAll:null,
					photosNull:false,
					isPresale:null,
					isSale:null,
					Data:null,
					showDown:true,
					detailId:null
        }
    },
    beforeMount(){
			// 不显示菜单导航栏
				this.$store.commit("HideMaizuoTabbar",false)
				this.detailId = this.$route.params.id
				console.log(this.detailId)
		},
    mounted(){
        axios({
            url:`https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=6167730`,
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15797681444157528347062","bc":"440100"}',
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res=>{
						this.filminfo = res.data.data.film
						this.isPresale = this.filminfo.isPresale
						this.isSale = this.filminfo.isSale
						this.photosSrc = this.filminfo.photos
						// 如果该影片没有剧照，显示提示没有剧照
						if (this.photosSrc) {
							this.photosAll = this.photosSrc.length
						}else{
							this.photosNull = true
						}
						// 传入时间戳
						this.$store.commit("PremiereDateMutation",this.filminfo.premiereAt)
						// 获取转换后的日期
						this.Data = this.$store.getters.premiereDateInfo
				})
    },
    beforeDestroy(){
			// 离开当前组件，显示菜单导航栏
        this.$store.commit("HideMaizuoTabbar",true)
    },
    components:{
			// 组件
			detailHeader,
			swiper,
			stills,
			stillsSwiper
		},
		methods:{
			// 电影简介下拉
			handeleDown(){
				this.synopsisStyle = !this.synopsisStyle
				this.showDown = !this.showDown
			},
			
			// 进入该电影详情页面
			handleToCinnemas(id){
          this.$router.push({name:'cinemas',params: {id } })
			},
			
			// 显示剧照页面
			handleShowStills(){
				this.$store.commit("isStillsMutation")
			},
			// 显示剧照轮播页面
			showStillsSwiper(){
      	this.$store.commit("StillsSwiperMutation")
   	 	}
		}
}
</script>
