<script setup>
import PenIconButton from '../icons-buttons/PenIconButton.vue';
import CalendarIconButton from '../icons-buttons/CalendarIconButton.vue';
import UserIconButton from '../icons-buttons/UserIconButton.vue';
</script>

<template>
    <div class='max-w-md flex flex-col justify-between'>

        <div class='flex-grow'></div>
        <div class='flex flex-col items-end space-y-6 p-6 mb-16'>
            <PenIconButton />
            <CalendarIconButton />
            <UserIconButton />
        </div>
    </div>
</template>