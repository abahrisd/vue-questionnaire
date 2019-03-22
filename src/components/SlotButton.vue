<template>

    <button
            v-on:click="submit"
    >
        <slot name="name1">Name1</slot>
        &nbsp;
        <slot name="name2">Name2</slot>
    </button>

</template>

<script>
    export default {
        name: 'SlotButton',
        methods: {
            submit() {
                console.log('submit!');
                this.$emit('submit!');
            },
        },
    };
</script>

<style scoped>
</style>