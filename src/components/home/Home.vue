<template>
    <div>
        <select class="select">
                <option value=""><input type="text"></option>
                <option v-for="league in searchResult" :key="league">{{ league.competition.name }}</option>
        </select> 
        <div class="home-component">
            <div class="card" v-for="(leagues, index) in lgs.slice(0, 5)" :key="index">
                <img class="card-img-top" :src="leagues.thumbnail" alt="Card image cap" style="width: 100%;">
                <div class="card-body">
                    <h5 class="card-title" v-text="leagues.title"></h5>
                    <p class="card-text" v-text="leagues.date"></p>
                    <button type="button" class="btn btn-outline-primary" onclick="this.url">Live</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>    
    import axios from 'axios';
export default {
    name: 'HomeComponent',
    mounted() {
        this.created();
    },
    created(){
        const api = 'https://www.scorebat.com/video-api/v1/';
        axios.get(api)
            .then((rspt) => {
                this.lgs = rspt.data;
                return this.lgs.sort(function(){return 0.5 - Math.random()});
            }, Error => {
                console.log(Error);
        });
    },
    data() {
        return {
            lgs: [],
        }
    },
   computed: {
        searchResult() {
        let lead = this.lgs;
        
        if (this.searchValue != '' && this.searchValue) {
                lead = lead.filter((item) => {
                    if (existing[item.competition.name]) return false;
                    return existing[item.competition.name] = true;
                })
            }
            return lead
        }
    }
}
</script>