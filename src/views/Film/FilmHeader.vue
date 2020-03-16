<template>
    <div>
        <ul>
            <router-link to="/film/nowplaying" tag="li" activeClass="active">正在热映</router-link>
            <router-link to="/film/comingsoon" tag="li" activeClass="active">即将上映</router-link>
        </ul>
    </div>
</template>

<script>

export default {
    
}
</script>

<style lang="stylus" scoped>
ul
  display flex
  justify-content space-around
  li
    margin .6rem
    padding-top .5rem
    width 3rem
    height 1.5rem
    text-align center
    background white
    font-size .7rem

.active
  color red
  border-bottom .1rem solid red
</style>