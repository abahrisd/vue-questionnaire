
<template>
    <div id="app">
        <main>
            <Panel
                    class="calculator-panel"
                    headline="Income Tax Calculator"
            >
                <template>
                    <InputForm/>
                </template>
            </Panel>

        </main>
    </div>
</template>

<script>
    import Panel from './components/Panel.vue';
    import InputForm from './components/InputForm.vue';
    import Result from './components/Result.vue';
    // import { calcTaxes } from './calc';

    export default {
        name: 'app',
        components: {
            Panel,
            InputForm,
            Result,
        },
    };
</script>

<!--<style lang="scss" src="./assets/globalStyles/_colors.scss"/>-->
<style lang="scss" src="./assets/styles/App.scss"/>