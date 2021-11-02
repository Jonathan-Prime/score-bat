<template>
    <div>
        <div class="component">
            <div class="card" v-for="(item, index) in dataRandom" :key="index">
                <img class="card-img-top" :src="item.thumbnail" alt="Card image cap" style="width: 100%;">
                <div class="card-body">
                    <h5 class="card-title" v-text="item.title"></h5>
                    <p class="card-text" v-text="item.date"></p>
                    <button type="button" class="btn btn-outline-primary" @click="showVideo(item)">Ver video</button>
                </div>
            </div>
        </div>
        <Detail v-if="show_modal" @close="show_modal = false" :dataRandom = "dataRandom" :view = "HomeComponent"/>
    </div>
</template>
<script>    
    import axios from 'axios';
    import Detail from '../detail/Detail.vue';
    import { EventBus } from '../../eventBus.js'

export default {
    name: 'HomeComponent',
    components: {
        Detail,
    },

    mounted() {
        this.getScoreBat();
    },
    data() {
        return {
/*             lgs: [], */
            show_modal: false,
            dataRandom: [],
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
                    console.log(rspt.data)
                    this.showRandom(rspt.data);
                });
        },
        showRandom(data) {
            var dataRandom = [];
            for(let index = 0; index < data.length; index++) {
                dataRandom[index] = Math.floor(Math.random() * data.length);
            }
            this.dataRandom.push(data[dataRandom[0]]);
            this.dataRandom.push(data[dataRandom[1]]);
            this.dataRandom.push(data[dataRandom[2]]);
            this.dataRandom.push(data[dataRandom[3]]);
            this.dataRandom.push(data[dataRandom[4]]);

        }
    }
}
</script>