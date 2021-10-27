<template>
    <div id="navbar">
        <nav class="navbar navbar-light bg-light justify-content-between">     
         <img src="../../assets/scorebat.png" width="30" height="30" class="d-inline-block align-top" alt="">
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </nav>
    </div>
</template>
<script>    
    export default {
        name: 'navBar',
    }
</script>