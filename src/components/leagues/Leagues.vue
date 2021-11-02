<template>
    <div>  
        <div class="component-leagues">
            <Select2 v-model="value" :options="options" :settings="{settingOption: value, settingOption: value}" @change="changeEvent(value)"></Select2>
        </div>
        <div class="component">
            <div class="card" v-for="(item, index) in newArr" :key="index">
                <img class="card-img-top" :src="item.thumbnail" alt="Card image cap" style="width: 100%;">
                <div class="card-body">
                    <h5 class="card-title" v-text="item.title"></h5>
                    <p class="card-text" v-text="item.date"></p>
                    <button type="button" class="btn btn-outline-primary" @click="showVideo(item)">Ver video</button>
                </div>
            </div>
        </div>
        <Detail v-if="show_modal" @close="show_modal = false" :dataRandom = "newArr" :view = "LeaguesComponent"/>
    </div>
</template>

<script>
    import axios from 'axios';
    import Detail from '../detail/Detail.vue';
    import { EventBus } from '../../eventBus.js';
    import Select2 from 'v-select2-component';

export default {

    name: 'LeaguesComponent',
    components: {
        Detail,
        Select2,
    },

    data() {
        return { 
            scoreBat: [],
            newArr: [],
            show_modal: false,
            value: 'Select league',
            options: [],
        }
    },

    methods: {
        showVideo(id){
            this.show_modal = true;
            console.log(id);
            EventBus.$emit("showVideo", {item: id});
        },
        getScoreBat(){
            const api = 'https://www.scorebat.com/video-api/v1/';
            axios.get(api)
                .then((rspt) => {
                    this.dataScore = rspt.data;
                    this.getOptions(rspt.data);
                }). catch((error) => error)
        },
        getOptions(data){
            for(var i = 0; i < data.length; i++){
                this.options.push(data[i].competition.name);
            }
            console.log(this.options);
        },
        changeEvent(value) {
            this.newArr = [];
            for(var i = 0; i < this.dataScore.length; i++){
                if(this.dataScore[i].competition.name === value) {
                    this.newArr.push(this.dataScore[i]);
                }
            }
            console.log(this.newArr);
        },
    },
    created() {
        this.getScoreBat();
    }

}
</script>

<style>

</style>