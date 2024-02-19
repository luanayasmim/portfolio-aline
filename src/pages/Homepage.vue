<script setup>
    import MoonIconButton from '../components/icons-buttons/MoonIconButton.vue';
    import PrimaryButton from '../components/text-buttons/PrimaryButton.vue';
    import SecondaryButton from '../components/text-buttons/SecondaryButton.vue';
    import PenIconButton from '../components/icons-buttons/PenIconButton.vue';
    import CalendarIconButton from '../components/icons-buttons/CalendarIconButton.vue';
    import UserIconButton from '../components/icons-buttons/UserIconButton.vue';
</script>

<template>
    <header>
        <div class="ml-10">
            <MoonIconButton/>
        </div>
        <main class="flex">
            <div class="ml-auto mr-10">
                <div class="py-10">
                    <h1 class="text-black text-4xl font-medium">Hi! My name is Aline and I design  <span className="text-purple-500">experiences.</span></h1>
                </div>
                <div class="flex">
                    <PrimaryButton text="download resume"/>
                    <SecondaryButton text="contact"/>
                </div>
            </div>

        </main>
        <div class="ml-10">
            <PenIconButton/>
            <CalendarIconButton/>
            <UserIconButton/>
        </div>
    </header>
    
</template>
   
<style scoped>

</style>