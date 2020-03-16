<template>
    <div>
       <!-- 用户名与头像 -->
      <div
      class="avatar">
      	 <!-- 头像 -->
				 <div class="avatar-box">
					 <div class="avatar-img">
					 		<img src="https://mall.s.maizuo.com/4f0b29878f62f5e298a89a4654f0e8f0.jpg" alt="">
					 </div>
					 <!-- 用户名 -->
					 <div class="avatar-name">
					 		<p>用户名</p>
				 	 </div>
				 </div>
      </div>
				<!-- 电影订单 -->
			<div
			class="order">
				<ul>
					<router-link to="/center/filmOrder" tag="li">
						<!-- 订单图标 -->
						<i class="iconfont orange">
							&#xe6f2;
						</i>
						<p>电影订单</p>
					</router-link>
					<li>
						<i class="iconfont green">
							&#xe6f1;
						</i>
						<p>商品订单</p>
					</li>
				</ul>
			</div>
			<!-- 卖座券 -->
			<div class="card">
				<ul>
					<li
					class="border-buttom">
						<i class="iconfont orange">&#xe783;</i>
						<span>卖座券</span>
						<i class="iconfont right-icon">&#xe62d;</i>
					</li>
					<li
					class="border-buttom">
						<i class="iconfont red">&#xe601;</i>
						<span>组合红包</span>
						<i class="iconfont right-icon">&#xe62d;</i>
					</li>
					<li
					class="border-buttom">
						<i class="iconfont yellow">&#xe62a;</i>
						<span>余额</span>
						<i class="iconfont right-icon">&#xe62d;</i>
					</li>
					<li
					class="border-buttom">
						<i class="iconfont lightgreen">&#xe61e;</i>
						<span>设置</span>
						<i class="iconfont right-icon">&#xe62d;</i>
					</li>
				</ul>
			</div>
    </div>
</template>

<script>
import 'styles/center.stylus'

export default {
    data(){
			return{
			}
		},
		methods:{
		}
}
</script>

<style lang="stylus" scoped>
</style>