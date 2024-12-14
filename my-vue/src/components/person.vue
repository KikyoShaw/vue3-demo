<template>
    <div class="person">
        <MyTest/>
        <hr>
        <ImageIndex/>
    </div>
</template>

<script setup name='Person'>
    import ImageIndex from './ImageIndex.vue'
    import MyTest from './MyTest.vue'
</script>

<style scoped>
.person{
    background-color: white;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>