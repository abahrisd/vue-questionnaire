<template>
    <div>
        <button class="gorgeousButton" @click="buttonClick">
            Send text to parent
        </button>
        <input type="text" ref="input">
    </div>
</template>

<script>
    export default {
        name: 'GorgeousButton',
        data() {
            return {
                inputValue: 'Change me tender',
            };
        },
        methods: {
            buttonClick() {
                console.log('this.$refs.input.value', this.$refs.input.value);
                this.$emit('gorgeous-click', this.$refs.input.value);
            },
        },
    };
</script>

<style scoped>

    .gorgeousButton {
        margin: 20px;
        padding: 20px;
        font-size: 20px;
        color: gold;
    }
</style>