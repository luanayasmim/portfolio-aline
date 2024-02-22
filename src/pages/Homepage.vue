<script setup>
    import Start from '../components/Start.vue';
    import Projects from '../components/Projects.vue';
    import Timeline from '../components/Timeline.vue';
    import Aboutme from '../components/Aboutme.vue';
</script>

<template>
    <header>
        <Start/>
    </header>
    <!-- <IronIconButton/> -->

    <!-- <main>
        <Projects/>
        <Timeline/>
    </main> -->

    <footer class="h-screen flex flex-col px-8">
        <Aboutme/>
    </footer>
    
</template>
   
<style scoped>

</style>