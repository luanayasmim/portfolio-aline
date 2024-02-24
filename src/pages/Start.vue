<script setup>
    import MoonIconButton from '../components/icons-buttons/MoonIconButton.vue';
    import PrimaryButton from '../components/text-buttons/PrimaryButton.vue';
    import SecondaryButton from '../components/text-buttons/SecondaryButton.vue';
    import IronIconButton from '../components/icons-buttons/IronIconButton.vue';
    import TextInteractive from '../components/text/TextInteractive.vue';
    import LateralMenu from '../components/menu/LateralMenu.vue';
</script>

<template>
    <!-- Menu Lateral -->
    <div class='h-screen flex'>
        <div class='max-w-md flex flex-col justify-between'>
            <!-- Botão no topo da coluna -->
            <div>
                <MoonIconButton/>
            </div>

            <!-- Container para os três botões no final da coluna -->
            <div class="">
                <LateralMenu/>
            </div>
        </div>

        <!-- Texto -->
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