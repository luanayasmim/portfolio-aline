<script setup>
import PenIconButton from '../buttons/icons-buttons/PenIconButton.vue';
import CalendarIconButton from '../buttons/icons-buttons/CalendarIconButton.vue';
import UserIconButton from '../buttons/icons-buttons/UserIconButton.vue';
</script>

<template>
    <div class='max-w-md flex flex-col justify-between'>

        <div class='flex-grow py-20 2xl:py-60'></div>
        <div class='flex flex-col items-end space-y-6'>
            <PenIconButton />
            <CalendarIconButton />
            <UserIconButton />
        </div>
    </div>
</template>