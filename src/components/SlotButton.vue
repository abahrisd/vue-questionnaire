<template>

    <button
            v-on:click="submit"
    >
        <slot>Подтвердить!</slot>
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