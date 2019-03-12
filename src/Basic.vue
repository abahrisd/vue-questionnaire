<template>
    <div>
        <h1>Vue app!</h1>
        <p>
            <!-- используем компонент router-link для навигации -->
            <!-- входной параметр `to` определяет URL для перехода -->
            <!-- `<router-link>` по умолчанию отображается тегом `<a>` -->
            <router-link to="/app">App comp</router-link>
            <router-link to="/hw">HelloWorld comp</router-link>
        </p>
        <!-- отображаем тут компонент, для которого совпадает маршрут -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Basic',
    };
</script>

<style scoped>

</style>