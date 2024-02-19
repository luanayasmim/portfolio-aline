<script setup>
defineProps({
    text:{
        type: String,
        default: () => "Primary"
    }
})
</script>

<template>
    <button class="w-72 h-14 rounded-3xl border border-purple-500 ml-auto">
        <span class="text-purple-500 text-xl font-medium">{{ text }}</span>
    </button>
</template>

<style scoped>

</style>