<template>
    <nuxt-child />
</template>

<script>
    export default {
        layout: 'admin',

        middleware: 'auth',
    };
</script>

<style>

</style>
