import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// 状态管理（实现非父子通信
// 方便管理和调试/时光旅行
export default new Vuex.Store({
    state:{
				// 共享状态
				// 菜单导航栏
				isTabbarShow:true,
				// 即将上映
        comingList:[],
				// 正在热映
				nowList:[],
				// 剧照总合页面
				isStills:false,
				// 剧照轮播页面
				ShowStillsSwiper:false,
				// 上映日期
				premiereDataVal:null,
				// 影院服务页面
				isShowServe:false,
				// 电影院影片信息
				cinemaPageVal:null
    },
    getters:{
			// 即将上映，axios请求的数据
			comingListInfo: state => {
				return state.comingList
			},
			// 剧照
			isStillsInfo: state => {
				return state.isStills
			},
				// 查看剧照轮播页面
			StillsSwiperInfo: state => {
				return state.ShowStillsSwiper
			},
			// 上映日期*-*-*
			premiereDateInfo: state => {
				return state.premiereDataVal
			},
			isShowServeInfo: state => {
				return state.isShowServe
			},
			// 电影院页面的影片信息
			cinemaPageInfo: state => {
				return state.cinemaPageVal
			}
    },
    mutations:{
        // 唯一修改状态的地方
        HideMaizuoTabbar(state,data){
            state.isTabbarShow = data
        },
        // 正在热映
        nowListMutation(state,data){
            state.nowList = data
        },
        // 即将上映
        comingListMutation(state,data){
					// 获取axios请求来的页面数据
					state.comingList = data
					state.comingList.map(function(n){ 
						// 转换时间戳为周，月，日
						var week = new Date(parseInt(n.premiereAt) * 1000).getDay();
						var m = new Date(parseInt(n.premiereAt) * 1000).getMonth()+1;
						var d = new Date(parseInt(n.premiereAt) * 1000).getDate();
						// 周* 
							switch(week)
							{
								case 0:week = '日' 
								break;
								case 1:week = '一'	
								break;
								case 2:week = '二'
								break;
								case 3:week = '三'
								break;
								case 4:week = '四'
								break;
								case 5:week = '五'
								break;
								case 6:week = '六'
       					break;
							}	
							n.premiereAt = '上映日期：周'+week+' '+m+'月'+d+'日'
					})
				
				},
        // 是否显示全部剧照页面
        isStillsMutation(state){
            state.isStills = !state.isStills
        },
        // 是否显示剧照轮播
        StillsSwiperMutation(state){
            state.ShowStillsSwiper = !state.ShowStillsSwiper
				},
				// 影片详情页面，时间戳转换
				PremiereDateMutation(state,data){
					// 上映事件格式*-*-*
					state.premiereDataVal =  new Date(parseInt(data) * 1000).toLocaleDateString().replace(/\//g,"-");
				},
				// 改变影院服务页面是否显示
				isShowServeMutation(state){
					state.isShowServe = !state.isShowServe
				},
				// 电影院影片信息
				cinemaPageMutation(state,data){
					state.cinemaPageVal = data
				}
    },
    actions:{
        //异步处理
        // 正在热映请求
        getNowListAction(store){
            axios({
                url:"https://m.maizuo.com/gateway?cityId=431000&pageNum=1&pageSize=10&type=1&k=4710757",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15797681444157528347062","bc":"431000"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
								store.commit("nowListMutation",res.data.data.films)
            })
        },
        // 即将上映请求
        getComingListAction(store){
            axios({
                url:"https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=443967",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15797681444157528347062"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
								store.commit("comingListMutation",res.data.data.films);
            })
				},
				// 电影院页面请求影片信息
				getCinemaPageAction(store,id){
					axios({
            url:`https://m.maizuo.com/gateway?filmId=5636&k=8805791`,
            headers:{
              'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15797681444157528347062","bc":"431000"}',
              'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res=>{
					store.commit("cinemaPageMutation",res.data.data.films);
					console.log(res.data)
				})
				}
    }
})