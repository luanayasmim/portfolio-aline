<script>
    import { defineAsyncComponent, ref, watch, computed } from 'vue';

    const Moon = defineAsyncComponent(() => import('lucide-vue-next').then(module => module.Moon));
    const Sun = defineAsyncComponent(() => import('lucide-vue-next').then(module => module.Sun));

    export default{
        name: 'ThemeButton',
        setup(){
            const isMoon = ref(true);

            const toggleIcon = () =>{
                isMoon.value = !isMoon.value;
            };

            const currentIcon = ref(Moon);

            const buttonStyle = computed(()=>{
                return isMoon.value ? 'border-black text-black'
                                    :  'border-white text-white';
            })

            watch(isMoon, (newValue) => {
                currentIcon.value = newValue ? Moon : Sun;
            });

            return{
                toggleIcon,
                currentIcon,
                buttonStyle
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
            class='flex items-center justify-center w-14 h-14 rounded-full border'
            :class='buttonStyle'
            @click='toggleIcon'
        >
            <component :is='currentIcon' class='w-6 h-6'/>
        </button>
    </div>
</template>