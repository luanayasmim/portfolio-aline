<script setup>
    import Start from '@/components/views/Start.vue';
    import Projects from '@/components/views/Projects.vue';
    import Timeline from '@/components/views/Timeline.vue';
    import Aboutme from '@/components/views/Aboutme.vue';
    import ThemeButton from '@/components/buttons/ThemeButton.vue';
    import LateralMenu from '@/components/menu/LateralMenu.vue';

    import { useDark, useToggle } from '@vueuse/core';
    
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
</script>

<template>
    <div class="dark:text-white dark:bg-black">

        <div class="flex flex-col">
            <div class='max-w-md flex flex-col justify-between'>
                <div class='fixed z-40'>
                    <ThemeButton @click="toggleDark()" />
                    <LateralMenu/>
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
    </div>
</template>