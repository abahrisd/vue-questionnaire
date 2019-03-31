<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="life-cycle-hooks">
        <div>
            <span>HelloWorld!</span>
        </div>
        <div>
            <span>{{property}}</span>
        </div>
        <div class="life-cycle-hooks__counter">
            <span>{{count}}</span>
        </div>
        <div>
            <div>Increment mf</div>
            <div>
                {{increment}}
                <button v-on:click="handleIncrement">Increment it!</button>
            </div>
            <SlotButton>
                <template v-slot:name1>
                    <span class="button__first">Кнопка</span>
                </template>
                <template v-slot:name2>
                    <span class="button__second">подтвердить</span>
                </template>
            </SlotButton>
        </div>
        <div>
            <GorgeousButton v-on:gorgeous-click="onGorgeousClick($event)">Gorgeous!</GorgeousButton>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import SlotButton from './SlotButton.vue';
    import GorgeousButton from './GorgeousButton.vue';

    export default {
        name: 'HelloWorld',
        components: {
            SlotButton,
            GorgeousButton,
        },
        computed: mapState({
            increment() {
                return this.$store.state.increment;
            },
        }),
        methods: {
            handleIncrement() {
                this.$store.state.increment += 1;
            },
            onGorgeousClick(data) {
                console.log('Gorgeous!', data);
            },
        },
        data() {
            return {
                property: 'Blank',
                count: 0,
            };
        },
        beforeCreate() {
            console.log('Hello world: beforeCreate');
        },
        beforeUpdate() {
            // this.property = `Count: ${this.count}`;
            console.log('Hello world: beforeUpdate');
        },
        created() {
            this.property = 'Example property update.';
            console.log('Hello world: created');

            /* setInterval(() => {
                this.count += 1;
            }, 1000); */
        },
        updated() {
            this.property = `Count: ${this.count}`;
            console.log('Hello world: updated');
        },
        // not for requests
        beforeMount() {
            console.log('Hello world: beforeMount');
        },
        mounted() {
            console.log('Hello world: mounted');
        },
        beforeDestroy() {
            console.log('Hello world: beforeDestroy');
        },
        destroyed() {
            console.log('Hello world: destroyed');
        },
    };
</script>

<style scoped>
    .life-cycle-hooks {
        margin-left: 20px;
    }
    .life-cycle-hooks__counter {
        font-size: 18px;
        line-height: 20px;
    }
    .button__first {
        color: orange;
    }
    .button__second {
        color: blue;
    }
</style>