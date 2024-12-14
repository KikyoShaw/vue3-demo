<template>
    <div class="image-index">
        <h2>
            <img v-for="(img,index) in imgList" :src="img" :key="index">
        </h2>
        <button @click="addImage">添加图片</button>
    </div>
</template>

<script setup name='ImageIndex'>
    import { reactive } from 'vue'
    let imgList = reactive([
        new URL('../assets/img/back1.jpg',import.meta.url).href
    ])

    let index = 1
    function addImage(){
        index += 1
        if(index > 4)
            index = 1
        const newImgPath = `../assets/img/back${index}.jpg`
        imgList.push(new URL(newImgPath,import.meta.url).href)
    }
</script>

<style scoped>
img{
    width: 300px;
    height: 200px;
}
</style>