
<template>
    <div>
        <button v-on:click="goBack">Go back</button>
        <main>
            <Panel
                    class="calculator-panel"
                    headline="Income Tax Calculator"
            >
                <template>
                    <transition
                            name="alert-in"
                            mode="out-in"
                            enter-active-class="animated fadeIn"
                            leave-active-class="animated fadeOut"
                    >
                        <InputForm
                                v-if="!resultsCalculated"
                                @submitted="submitted"
                        />
                        <Result
                                v-if="resultsCalculated"
                                @clearCalculations='clearCalculations'
                                :results="calculations"
                        />
                    </transition>
                </template>
            </Panel>
        </main>
    </div>
</template>

<script>
    import Panel from './components/Panel.vue';
    import InputForm from './components/InputForm.vue';
    import Result from './components/Result.vue';
    import { calcTaxes } from './calc';

    export default {
        name: 'app',
        components: {
            Panel,
            InputForm,
            Result,
        },
        data() {
            return {
                calculations: {},
            };
        },
        computed: {
            resultsCalculated() {
                return Object.keys(this.calculations).length !== 0;
            },
            username() {
                // Мы скоро разберём что такое `params`
                return this.$route.params.username;
            },
        },
        methods: {
            submitted(input) {
                const calcValues = calcTaxes(input);
                this.calculations = {
                    grossIncome: { label: 'Gross Salary', value: calcValues.incomeValue },
                    tax: { label: 'Income Tax', value: -calcValues.incomeTax },
                    churchTax: { label: 'Church Tax', value: -calcValues.churchTax },
                    soli: { label: 'Solidarity Charge', value: -calcValues.soli },
                    netIncome: { label: 'Net Salary', value: calcValues.netIncome },
                };
            },
            clearCalculations() {
                this.calculations = {};
            },
            goBack() {
                if (window.history.length) {
                    this.$router.go(-1);
                } else {
                    this.$router.push('/');
                }
            },
        },
    };
</script>

<style lang="scss" src="./assets/styles/App.scss"/>