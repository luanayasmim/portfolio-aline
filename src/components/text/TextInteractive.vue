<template>
    <h1 class='text-black text-4xl font-medium text-left'>Hi! My name is Aline and I design <span :class='currentColor'>{{
        currentWord }}.</span></h1>
</template>

<script>
export default {
    data() {
        return {
            words: ['experiences', 'products', 'interfaces'],
            colors: ['text-purple-500', 'text-amber-500', 'text-fuchsia-400'],
            currentIndex: 0,
            currentWord: 'experiences',
            currentColor: 'text-purple-500'
        };
    },
    mounted() {
        setInterval(this.changeWord, 3000);
    },
    methods: {
        changeWord() {
            this.currentIndex = (this.currentIndex + 1) % this.words.length;

            this.currentWord = this.words[this.currentIndex];
            this.currentColor = this.colors[this.currentIndex];
        },
    }
};
</script>