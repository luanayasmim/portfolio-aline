<script setup>
    import MoonIconButton from '../buttons/icons-buttons/MoonIconButton.vue';
    import PrimaryButton from '../buttons/text-buttons/PrimaryButton.vue';
    import SecondaryButton from '../buttons/text-buttons/SecondaryButton.vue';
    import IronIconButton from '../buttons/icons-buttons/IronIconButton.vue';
    import TextInteractive from '../text/TextInteractive.vue';
    import LateralMenu from '../menu/LateralMenu.vue';
</script>

<template>
    <!-- Menu Lateral -->
    <div class='h-screen flex'>
        <main class='ml-auto mt-60 2xl:mt-80 space-y-11'>
                <TextInteractive/>
                <!-- Botões -->
                <div class='space-x-10 flex justify-end'>
                    <PrimaryButton text='download resume'/>
                    <SecondaryButton text='contact'/>
                </div>
        </main>
        
        <div class='flex items-end mr-16 mb-16'>
            <IronIconButton/>
        </div>
    </div>
</template>