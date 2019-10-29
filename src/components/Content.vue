<template>
    <div>
        <p>This child components of Content.vue are:</p>
    <ul>
      <li v-for="child in childComponents" :key="child.id">{{ child }}</li>
    </ul>
    {{ weather_data }}
    </div>
</template>

<script>
    export default {
        props: ["weather_data"],
        data() {
            return {
                childComponents: ['TempVarChart.vue', 'Highlights.vue']
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>