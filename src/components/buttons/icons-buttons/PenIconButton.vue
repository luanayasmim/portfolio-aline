<script>
import { defineAsyncComponent } from 'vue';

const PenTool = defineAsyncComponent(() =>
    import('lucide-vue-next').then(module => module.PenTool)
);

export default {
    name: 'PenIconButton',
    methods: {
        showDiv() {
            this.$refs.hoverDiv.classList.remove('invisible');
        },
        hideDiv() {
            this.$refs.hoverDiv.classList.add('invisible');
        }
    },
    components: {
        PenTool
    }
}
</script>

<template>
    <div class='flex flex-1 ml-10 mt-10 relative'>
        <div ref='hoverDiv' class='invisible transition-opacity duration-300 ease-in-out
                   btn w-52 h-14 
                   flex justify-center items-center
                   bg-black text-white rounded-full border border-purple-500'>
            <span>Projects</span>
        </div>
        <a class='absolute btn flex items-center justify-center 
                        w-14 h-14 rounded-full 
                        border border-black text-black dark:bg-white
                        hover:bg-white hover:text-purple-500 hover:border-purple-500
                        focus:bg-purple-500 focus:text-white focus:border-none' @mouseover='showDiv'
            @mouseleave='hideDiv' href='#projects'>
            <PenTool class='w-6 h-6' />
        </a>
    </div>
</template>