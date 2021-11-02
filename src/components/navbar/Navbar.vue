<template>
    <div id="navbar">
        <nav class="navbar navbar-light bg-light justify-content-between">     
         <img src="../../assets/scorebat.png" width="30" height="30" class="d-inline-block align-top" alt="">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
                <router-link to="/" class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Inicio</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/leagues" class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Ligas</router-link>
            </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
            </div>
        </nav>
    </div>
</template>
<script>    
    export default {
        name: 'navBar',
    }
</script>