<script setup>
import Start from '../components/views/Start.vue';
import Projects from '../components/views/Projects.vue';
import Timeline from '../components/views/Timeline.vue';
import Aboutme from '../components/views/Aboutme.vue';
import MoonIconButton from '../components/buttons/icons-buttons/MoonIconButton.vue';
import LateralMenu from '../components/menu/LateralMenu.vue';
</script>

<template>
    <div class="h-screen flex flex-col fixed z-40">
        <div class='max-w-md flex flex-col justify-between'>
            <div>
                <MoonIconButton />
            </div>
            <div>
                <LateralMenu />
            </div>
        </div>
    </div>
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