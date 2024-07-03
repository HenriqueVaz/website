<script setup lang="ts">
import TopNavBar from "./components/structure/TopNavBar.vue";
</script>

<template>
    <div style="display: grid; width: 100%">
        <TopNavBar id="top-nav-bar" />
		
        <RouterView id="main-section" />
        <span class="view-overlay"></span>
    </div>
</template>

<style scoped>
#top-nav-bar {
    width: 100vw;
    display: grid;
}

#main-section {
    width: 100vw;
    height: 100vw;
    display: grid;
}
</style>
