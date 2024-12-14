<template>
    <div class="my-test">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
        <hr>
        <h2>这是一辆{{ car.carname }}, 价值{{ car.price }}万</h2>
        <button @click="changePrice">修改宝马价格</button>
        <button @click="changeCarName">修改车名字</button>
        <button @click="changeCar">更换车信息</button>
        <button @click="changetoRefs">toRefs测试</button>
        <hr>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        <button @click="changeFirstGameName">修改第一个游戏名字</button>
        <button @click="changeGames">更换游戏列表</button>
        <hr>
        <h2>{{ obj.a.b.c }}</h2>
        <button @click="changeObjC">修改值</button>
    </div>
</template>

<!-- <script>
export default
{
    name:'Person',
    // setup(){
    //     let name = '梁钟保' //此时的name不是响应式的
    //     let age = 50
    //     let tel = '18109784573'

    //     function changeName(){
    //         console.log('changeName')
    //         name = 'lzb' //修改name，页面时没有变化的
    //         console.log(name) //name确实修改了，但name不是响应式的
    //     }

    //     function changeAge(){
    //         console.log('changeAge')
    //         age += 1
    //         console.log(age)
    //     }

    //     function showTel(){
    //         console.log('showTel')
    //         alert(tel)
    //     }

    //     //将数据和方法交出去
    //     return{name, age, changeName, changeAge, showTel}

    //     //setup返回值也可以是一个渲染函数
    //     //return ()=>'哈哈'
    // }
}
</script> -->

<script setup name='MyTest'>
    import {reactive, ref, toRefs, toRef, watch} from "vue";

    let name = ref('梁钟保')
    let age = ref(50)
    let tel = '18109784573' //此时的name不是响应式的

    console.log(name)
    console.log(age)
    console.log(tel)

    let car = reactive({carname:'宝马', price:100})

    let games = ref([
        {id:'id01', name:'英雄联盟'},
        {id:'id02', name:'王者荣耀'},
        {id:'id03', name:'地下城与勇士'}
    ]) 

    let obj = reactive({
        a:{
            b:{
                c:666
            }
        }
    })

    let {carname, price} = toRefs(car); //取出car所有的值

    let p1 = toRef(car, carname)
    console.log(p1)
    console.log(p1.value)

    watch(age, (newValue, oldValue)=>{
        console.log('age值修改了',newValue, oldValue)
    })

    watch(()=>{return car.price},(newValue, oldValue)=>{
        console.log('price值修改了',newValue, oldValue)
    })

    function changetoRefs(){
        carname.value += '1'
        price.value += 10
        console.log(carname.value, car.carname)
        console.log(price.value, car.price)
    }

    function changeCarName(){
        carname.value += '1'
    }

    function changeCar(){
        Object.assign(car, {carname:'奥迪', price:50});
        console.log(car)
    }

    function changeGames(){
        games.value = [{id:'id04', name:'逆水寒'},{id:'id05', name:'明日之后'},{id:'id06', name:'阴阳师'}]
        console.log(games)
    }

    function changeName(){
        console.log('changeName')
        name.value = 'lzb' //修改name，页面时没有变化的
        console.log(name) //name确实修改了，但name不是响应式的
    }

    function changeAge(){
        console.log('changeAge')
        age.value += 1
        console.log(age)
    }

    function showTel(){
        console.log('showTel')
        alert(tel)
    }

    function changePrice(){
        car.price += 10
    }

    function changeFirstGameName(){
        games.value[0].name = 'lol'
    }

    function changeObjC(){
        obj.a.b.c = 999
    }
</script>

<style scoped>
button{
    margin: 0 5px;
}
li{
    font-size: 20px;
}
</style>