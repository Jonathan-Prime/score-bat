<template>
    <div class="template">
        <template v-if="lgs" >
                <div class="card" v-for="leagues in lgs">
                    <img class="card-img-top" :src="leagues.thumbnail" alt="Card image cap" style="width: 100%;">
                    <div class="card-body">
                        <h5 class="card-title" v-text="leagues.title"></h5>
                        <p class="card-text" v-text="leagues.date"></p>
                        <!-- <p class="card-text" v-text="leagues.embed"></p> -->
                        <button type="button" class="btn btn-outline-primary" onclick="this.url">Live</button>
                    </div>
                </div>
        </template>
    </div>
</template>
<script>    
    import axios from 'axios';
export default {
    mounted() {
        let url;
        axios.get('https://www.scorebat.com/video-api/v1/')
            .then((rspt) => {
                this.lgs = rspt.data;
                this.url = rspt.data.url;
                console.log(this.lgs);
            }, Error => {
                console.log(Error);
        });
    },
    data() {
        return {
            lgs: null,
        }
    }, 
}
</script>

<style>
    .template {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-end;
        justify-content: space-around;
        
    }
    .card {
      width: 25rem;
      margin: 12px 12px;
    }
    /*------------------------------------------------------------------
[ Responsive ]*/



@media (max-width: 992px) {
  /* .template {
    padding: 50px 24px 50px 24px;
  } */
}


</style>
