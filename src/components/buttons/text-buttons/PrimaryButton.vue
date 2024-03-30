<script>
export default {
    name: 'PrimaryButton',
    props: {
        text: {
            type: String,
            default: () => 'Primary'
        }
    },
    data() {
        return {
            fileUrl: '../../assets/resume.pdf',
        };
    },
};
</script>

<template>
    <a :href='fileUrl' download="Aline's resume.docx"
        class='flex items-center justify-center 
               w-72 h-14 rounded-3xl ml-auto
               border border-purple-500 
               hover:bg-purple-500 text-purple-500 text-xl font-medium hover:text-white'>
        <span>{{ text }}</span>
    </a>
</template>