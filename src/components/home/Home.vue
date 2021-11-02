<template>
    <div>
        <select class="select">
                <option value=""><input type="text"></option>
                <option v-for="(league, index) in searchResult" :key="index" >{{ league.competition.name }}</option>
        </select> 
        <div class="home-component">
            <div class="card" v-for="(leagues, index) in lgs.slice(0, 5)" :key="index">
                <img class="card-img-top" :src="leagues.thumbnail" alt="Card image cap" style="width: 100%;">
                <div class="card-body">
                    <h5 class="card-title" v-text="leagues.title"></h5>
                    <p class="card-text" v-text="leagues.date"></p>
                    <button type="button" class="btn btn-outline-primary" @click="showVideo()">Ver video</button>
                </div>
            </div>
        </div>
        <Detail v-if="show_modal" @close="show_modal = false"/>
    </div>
</template>
<script>    
    import axios from 'axios';
    import Detail from '../detail/Detail.vue';

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
            lgs: [],
            show_modal: false,
        }
    },
   computed: {
        searchResult() {
        let lead = this.lgs;
        lead = lead.filter((e) => (
            e.competition.name
        ));
            return lead
        }
    },
    methods: {
        showVideo(){
            this.show_modal = true;
        },
        getScoreBat(){
            const api = 'https://www.scorebat.com/video-api/v1/';
            axios.get(api)
                .then((rspt) => {
                    this.lgs = rspt.data;
                    return this.lgs.sort(function(){return 0.5 - Math.random()});
                }, Error => {
                    console.log(Error);
            });
        }
    }
}
</script>