<template>
    <div>
        <mt-index-list>
            <mt-index-section index="A">
                <mt-cell title="Aaron"></mt-cell>
                <mt-cell title="Alden"></mt-cell>
                <mt-cell title="Austin"></mt-cell>
            </mt-index-section>
            <mt-index-section index="B">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
            ...
            <mt-index-section index="Z">
                <mt-cell title="Zack"></mt-cell>
                <mt-cell title="Zane"></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>
import Vue from 'vue'

import { IndexList, IndexSection } from 'mint-ui';

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
export default {
    // beforeRoutrEnter(to,from,next){
    //     // 在渲染该组件的对应路由前被调用
    //     // 当守卫执行前，组件实例还没被创建，这里是获取不到组件的this
    // }
}
</script>

<style lang="stylus" scoped>

</style>