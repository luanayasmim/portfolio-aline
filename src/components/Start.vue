<script setup>
    import MoonIconButton from '../components/icons-buttons/MoonIconButton.vue';
    import PrimaryButton from '../components/text-buttons/PrimaryButton.vue';
    import SecondaryButton from '../components/text-buttons/SecondaryButton.vue';
    import PenIconButton from '../components/icons-buttons/PenIconButton.vue';
    import CalendarIconButton from '../components/icons-buttons/CalendarIconButton.vue';
    import UserIconButton from '../components/icons-buttons/UserIconButton.vue';
    import IronIconButton from '../components/icons-buttons/IronIconButton.vue';
</script>

<template>

    <!-- Menu Lateral -->
    <div class="h-screen flex">
        <div class="max-w-md flex flex-col justify-between">
            <!-- Botão no topo da coluna -->
            <div>
                <MoonIconButton/>
            </div>

            <!-- Espaçador para empurrar os outros três para o final -->
            <div class="flex-grow"></div>

            <!-- Container para os três botões no final da coluna -->
            <div class="flex flex-col items-end space-y-6 p-6 mb-16">
                <PenIconButton/>
                <CalendarIconButton/>
                <UserIconButton/>
            </div>
        </div>

        <!-- Texto -->
        <main class="ml-auto mt-60 2xl:mt-80 space-y-11">
                <div class="">
                    <h1 class="text-black text-4xl font-medium text-left">Hi! My name is Aline and I design  <span class="text-purple-500">experiences.</span></h1>
                </div>

                <!-- Botões -->
                <div class="space-x-10 flex justify-end">
                    <PrimaryButton text="download resume"/>
                    <SecondaryButton text="contact"/>
                </div>
        </main>
        
        <div class="flex items-end mr-16 mb-16">
            <IronIconButton/>
        </div>
    </div>
  
</template>

<style>

</style>