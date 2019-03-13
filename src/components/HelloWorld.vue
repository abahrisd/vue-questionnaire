<template>
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
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
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

            setInterval(() => {
                this.count += 1;
            }, 1000);
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
</style>