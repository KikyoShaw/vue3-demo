<template>
    <div class="app">
        <Person/>
    </div>
</template>

<script>

import Person from './components/person.vue';
import MyComputed from './components/MyComputed.vue'

export default{
    name:'App',
    components:{Person}
}
</script>

<style scoped>
.app{
    background-color: #ddd;
    box-shadow: 0 0 10px; 
    border-radius: 10px;
    padding: 20px;
}
</style>