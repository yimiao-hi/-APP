<template>
    <div>
        <mt-index-list>
            <mt-index-section 
            v-for="data in cityList"
            :index="data.index"
            :key="data.index">
            <div
                v-for="city in data.list"
                :key="city.cityId"
                @click="handleClick(city.cityId,city.name)">
                <mt-cell 
                :title="city.name">
                </mt-cell>
            </div>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>
import Vue from 'vue'
import { IndexList, IndexSection } from 'mint-ui';
import axios from 'axios'

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);

// var VueTouch = require('vue-touch')
// Vue.use(VueTouch,{name:'v-touch'})

export default {
    data(){
        return{
            cityList:[]
        }
    },
    mounted(){
        axios({
                url:"https://m.maizuo.com/gateway?k=1984284",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15797681444157528347062","bc":"440100"}',
                    'X-Host': 'mall.film-ticket.city.list'
                }
            }).then(res=>{
               this.cityList = this.handleCity(res.data.data.cities)
               console.log(this.cityList)
            })
    },
    methods:{
        handleCity(cityList){
            var letterArr = []
            for(var i = 65;i < 91;i++){
                // 添加26个字母
                letterArr.push(String.fromCharCode(i))
            }
            var newlist = []
            for(var j = 0;j<letterArr.length;j++){
                // 过滤遍历，切割出每个城市对象中的pinyin属性的第一个字母，
                // 把和letterArr里字母相同的push到newlist索引为该字母的一个对象，
                var arr = cityList.filter(item=>item.pinyin.substring(0,1)===letterArr[j].toLowerCase())
                // arr就是该城市
                if(arr.length>0){
                    newlist.push({
                        index:letterArr[j],
                        list:arr
                    })
                }
            }
            return newlist
        },
        handleClick(id,name){
            this.$store.commit("cityIdMutation",id)
            this.$store.commit("cityNameMutation",name)
            // 选择城市之后跳转至影院页面
            this.$router.push('/film')
        }
    }
}
</script>