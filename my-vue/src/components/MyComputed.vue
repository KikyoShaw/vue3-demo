<template>
 <div class="mycomputed">
    姓：<input type="text" v-model="firstName"> <br>
    名：<input type="text" v-model="lastName"> <br>
    全名：<span>{{ fullName }}</span> <br>
    <button @click="changeName">改成li-si</button>
 </div>
</template>

<script setup name="MyComputed">
    import { ref, computed } from "vue";
    let firstName = ref('zhang')
    let lastName = ref('san')

    let fullName = computed({
        get(){
            console.log('set')
            return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
        },
        set(va1){
            const [x1, x2] = va1.split('-') 
            console.log('get', x1, x2)
            firstName.value = x1
            lastName.value = x2
        }
    })

    function changeName(){
        fullName.value = 'li-si'
    }

</script>

<style scoped>

</style>