<script setup>
import PrimaryButton from '../buttons/text-buttons/PrimaryButton.vue';
import LinkedinIconButton from '../buttons/icons-buttons/LinkedinIconButton.vue';
import GithubIconButton from '../buttons/icons-buttons/GithubIconButton.vue';
import EmailIconButton from '../buttons/icons-buttons/EmailIconButton.vue';
</script>

<template>
    <div class='flex flex-col px-8 mt-[200px]'>
        <div class='ml-auto mr-10'>
            <img src='../../assets/aline-icon.png' alt='' width='354.5' height='365.5'>
        </div>
        <div class='flex ml-auto mr-10'>
            <h3 class='text-black text-4xl font-medium'>
                About
                <span class='text-purple-500'> me</span>
            </h3>
            <div class='w-2 h-2 bg-purple-500 rounded-full mt-5 ml-1'></div>
        </div>

        <div class='w-2/3 ml-auto mr-10 mt-10'>
            <p class='text-xl font-medium text-black text-end'>Hey! My name is Aline Reis, I`m passionate about everything
                that
                involves
                art, technology and people. I`m a curious person, always looking to learn new things and recently I`ve been
                especially interested in front-end programming and the potential for extending my work as a designer through
                it.
                Contact me to discuss design projects and collaborations!</p>
        </div>

        <div class='flex ml-auto mr-10 mt-10 space-x-10 mb-16'>
            <PrimaryButton text='download resume' />
            <div class='flex space-x-6'>
                <LinkedinIconButton />
                <GithubIconButton />
                <EmailIconButton />
            </div>
        </div>
    </div>
</template>