<template>
    <div class="home-component">
        <template v-if="lgs" >
                <div class="card" v-for="(leagues, index) in lgs.slice(0, 5)" :key="index">
                    <img class="card-img-top" :src="leagues.thumbnail" alt="Card image cap" style="width: 100%;">
                    <div class="card-body">
                        <h5 class="card-title" v-text="leagues.title"></h5>
                        <p class="card-text" v-text="leagues.date"></p>
                        <button type="button" class="btn btn-outline-primary" onclick="this.url">Live</button>
                    </div>
                </div>
        </template>
    </div>
</template>
<script>    
    import axios from 'axios';
export default {
    name: 'HomeComponent',
    mounted() {
        axios.get('https://www.scorebat.com/video-api/v1/')
            .then((rspt) => {
                this.lgs = rspt.data;
                this.url = rspt.data.url;
                console.log(this.lgs);
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
}
</script>