<script setup>
import Start from './Start.vue';
import Projects from './Projects.vue';
import Timeline from './Timeline.vue';
import Aboutme from './Aboutme.vue';
</script>

<template>
    <header>
        <Start />
    </header>

    <main>
        <Projects id='projects' />
        <Timeline id='timeline' />
    </main>

    <footer>
        <Aboutme id='aboutme' />
    </footer>
</template>
   
<style scoped></style>