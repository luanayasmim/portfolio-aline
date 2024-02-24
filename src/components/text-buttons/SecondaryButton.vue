<script setup>
defineProps({
    text:{
        type: String,
        default: () => "Secondary"
    }
})
</script>

<template>
    <button class="w-72 h-14 rounded-3xl border border-amber-500 ml-auto hover:bg-amber-500 text-amber-500 text-xl font-medium hover:text-white">
        <span class="">{{ text }}</span>
    </button>
</template>

<style scoped>

</style>