<template>
    <div class="person">
        <MyTest/>
        <hr>
        <ImageIndex/>
        <hr>
        <!-- <span class="svg-container">
            <svg-icon icon="vite"/>
        </span> -->
        <SvgIcon name="vite" size="20px"></SvgIcon>
    </div>
</template>

<script setup name='Person'>
    import ImageIndex from './ImageIndex.vue'
    import MyTest from './MyTest.vue'
    // import SvgIcon from './MySvg.vue'
    import SvgIcon from './MyNewSvg.vue'
</script>

<style scoped>
.person{
    background-color: white;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
.svg-container {
  vertical-align: middle;
  display: inline-block;
  width: 80px;
  height: 80px;
}
</style>