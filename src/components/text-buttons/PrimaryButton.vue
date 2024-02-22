<script setup>
defineProps({
    text:{
        type: String,
        default: () => "Primary"
    }
})
</script>

<template>
        <button class="w-72 h-14 rounded-3xl border border-purple-500 ml-auto hover:bg-purple-500 text-purple-500 text-xl font-medium hover:text-white">
            <span class="">{{ text }}</span>
        </button>
</template>

<style scoped>

</style>