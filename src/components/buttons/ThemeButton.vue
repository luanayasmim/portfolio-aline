<script>
    import { defineAsyncComponent, ref, watch, computed } from 'vue';

    import { useDark } from '@vueuse/core';

    const Moon = defineAsyncComponent(() => import('lucide-vue-next').then(module => module.Moon));
    const Sun = defineAsyncComponent(() => import('lucide-vue-next').then(module => module.Sun));

    export default{
        name: 'ThemeButton',
        setup(){

            const isDark = useDark();
            const isMoon = ref(true);

            const toggleIcon = () =>{
                isMoon.value = !isDark;
            };

            const currentIcon = ref(Moon);

            watch(isMoon, (newValue) => {
                currentIcon.value = newValue ? Moon : Sun;
            });

            return{
                toggleIcon,
                currentIcon,
            }
        },
        components:{
            Moon,
            Sun
        }
    };
</script>

<template>
    <div class='flex flex-1 ml-10 mt-10'>
        <button 
            class='flex items-center justify-center w-14 h-14 rounded-full 
                   border border-black text-black dark:border-white dark:text-white'
            @click='toggleIcon'
        >
            <component :is='currentIcon' class='w-6 h-6'/>
        </button>
    </div>
</template>