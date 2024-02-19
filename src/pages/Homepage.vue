<script setup>
    import MoonIconButton from '../components/icons-buttons/MoonIconButton.vue';
    import PrimaryButton from '../components/text-buttons/PrimaryButton.vue';
    import SecondaryButton from '../components/text-buttons/SecondaryButton.vue';
    import PenIconButton from '../components/icons-buttons/PenIconButton.vue';
    import CalendarIconButton from '../components/icons-buttons/CalendarIconButton.vue';
    import UserIconButton from '../components/icons-buttons/UserIconButton.vue';
    import IronIconButton from '../components/icons-buttons/IronIconButton.vue';
    import LinkedinIconButton from '../components/icons-buttons/LinkedinIconButton.vue';
    import GithubIconButton from '../components/icons-buttons/GithubIconButton.vue';
    import EmailIconButton from '../components/icons-buttons/EmailIconButton.vue';
</script>

<template>
    <header>
        <div class="ml-10">
            <MoonIconButton/>
        </div>
        <main class="flex">
            <div class="ml-auto mr-10">
                <div class="py-10">
                    <h1 class="text-black text-4xl font-medium">Hi! My name is Aline and I design  <span class="text-purple-500">experiences.</span></h1>
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
    <!-- <IronIconButton/> -->
    <footer class="h-screen flex flex-col px-8">
            <div class="ml-auto mr-10">
                <img src='../assets/aline-icon.png' alt="" width="354.5" height="365.5">
            </div>
            <div class="flex ml-auto mr-10">
                <h3 class="text-black text-4xl font-medium">
                    About
                    <span class="text-purple-500"> me</span>
                </h3>
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-5 ml-1"></div>
            </div>

            <div class="w-2/3 ml-auto mr-10 mt-10">
                <p class="text-xl font-medium text-black">Hey! My name is Aline Reis, I`m passionate about everything that involves art, technology and people. I`m a curious person, always looking to learn new things and recently I`ve been especially interested in front-end programming and the potential for extending my work as a designer through it. Contact me to discuss design projects and collaborations!</p>
            </div>

            <div class="flex w-2/3 ml-auto mr-10 mt-10">
                <PrimaryButton text="download resume"/>
                <LinkedinIconButton/>
                <GithubIconButton/>
                <EmailIconButton/>
            </div>
    </footer>
    
</template>
   
<style scoped>

</style>