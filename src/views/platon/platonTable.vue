<template>
  <div class="t-wrapper">
    <h1>Республика бўйича ўқув марказларида ўқувчиларнинг дарсга қатнашиш аҳволи</h1>
    <div class="table">
        <div class="thead">
            <div class="td">№</div>
            <div class="td">Ҳудудлар</div>
            <div class="td">ўқув марказ. сони</div>
            <div class="td">гуруҳ сони</div>
            <div class="td">ўқувчилар сони</div>
            <div class="tr">
                <div class="td grid-column-2">давомат (23.11.2023 йил)</div>
                <div class="td green">келган (%)</div>
                <div class="td red">келмаган (%)</div>
            </div>
        </div>
        <div class="tbody">
            <div class="tr" v-for="(item, index) in info" :key="index" :class="{'bg-c': index%2 == 1}">
                <div class="td">{{ index+1 }}</div>
                <div class="td">{{ item.obl }}</div>
                <div class="td">{{ item.schools }}</div>
                <div class="td">{{ item.classes }}</div>
                <div class="td">{{ item.people }}</div>
                <div class="td" :class="{'green': item.came>0}">{{ item.came }}</div>
                <div class="td" :class="{'red': item.notcame>0}">{{ item.notcame }}</div>
            </div>
            <div class="tr-bottom bg-blue">
                <div class="td"></div>
                <div class="td">Jami:</div>
                <div class="td"></div>
                <div class="td"></div>
                <div class="td"></div>
                <div class="td"></div>
                <div class="td"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            info:[
                {obl: 'Қорақалп.', schools: 25, classes: 0, people: 0, came: 0, notcame: 0},
                {obl: 'Андижон', schools: 12, classes: 0, people: 0, came: 0, notcame: 0},
                {obl: 'Бухоро', schools: 14, classes: 0, people: 0, came: 0, notcame: 0},
                {obl: 'Жиззах', schools: 24, classes: 13, people: 158, came: 100, notcame: 100},
                {obl: 'Қашқадарё', schools: 17, classes: 1, people: 19, came: 100, notcame: 100},
                {obl: 'Навоий', schools: 20, classes: 0, people: 0, came: 0, notcame: 0},
                {obl: 'Наманган', schools: 16, classes: 0, people: 0, came: 100, notcame: 0},
                {obl: 'Самарқанд', schools: 11, classes: 1, people: 18, came: 0, notcame: 100},
                {obl: 'Сурхондарё', schools: 25, classes: 7, people: 134, came: 0, notcame: 100},
                {obl: 'Сирдарё', schools: 10, classes: 0, people: 0, came: 0, notcame: 0},
                {obl: 'Тошкент в.', schools: 65, classes: 3, people: 33, came: 0, notcame: 100},
                {obl: 'Фарғона', schools: 4, classes: 0, people: 0, came: 0, notcame: 0},
                {obl: 'Хоразм', schools: 34, classes: 1, people: 15, came: 0, notcame: 100},
                {obl: 'Тошкент ш.', schools: 19, classes: 2, people: 26, came: 0, notcame: 100},
            ],
        }
    },
    computed:{
        summs(){
            let newsumms = {
                allschools: 0,
                allclasses: 0,
                allpeople: 0,
            }
            for (let i = 0; i < info.length; i++) {
                newsumms.allschools += 1
            }
        },
    },
    methods:{
        
    },
    mounted(){
        
    }

}
</script>

<style scoped>
.t-wrapper{
    background-color: #AAD9DF;
    padding: 25px;
}
.t-wrapper h1{
    color: #31478A;
    font-size: 24px;
    text-align: center;
    margin-bottom: 8px;
}
.t-wrapper .table{
    border: 1px solid #4990FF;
    /* border-radius: 5px; */
}
.t-wrapper .table .thead{
    color: white;
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr 2fr;
}
.t-wrapper .thead .tr{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.t-wrapper .thead .td{
    background-color: #4990FF;
    text-align: center;
    border: 0.5px solid white;
}
.t-wrapper .td{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
.t-wrapper .tbody .tr{
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 1fr;
}
.t-wrapper .tbody .tr:hover .td{
    background-color: #C9DCFB !important;
}
.t-wrapper .tbody .td{
    border: 0.5px solid #4990FF;
    background-color: white;
}
.t-wrapper .tbody .tr-bottom{
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 1fr;
}
.t-wrapper .tbody .tr-bottom .td{
    background-color: #4990FF ;
    border-color: white ;
    color: white;
}
.t-wrapper .tbody .tr-bottom:hover .td{
    background-color: #4990FF !important;
}


.grid-column-2{
    grid-column: span 2;
}
.green{
    color: #07811D;
}
.red{
    color: red;
}
.bg-c .td{
    background-color: #F4F9FE !important;
}
</style>