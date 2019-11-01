<template>
    <div>
        <p>This child components of Content.vue are:</p>
    <ul>
      <li v-for="child in childComponents" :key="child.id">{{ child }}</li>
    </ul>
    {{ weather_data }}
    <temp-var-charts :tempVar="tempVar"> </temp-var-charts>
    <highlights :highlights="highlights"> </highlights>
    </div>
</template>

<script>
import TempVarChart from './TempVarChart'
import Highlights from './Highlights'
    export default {
        props: ["weather_data"],
        components: {
            'temp-var-charts': TempVarChart,
            'highlights': Highlights
        },
        data() {
            return {
                childComponents: ['TempVarChart.vue', 'Highlights.vue'],
                tempVar: this.weather_data.temperature,
                highlights: this.weather_data.highlights,
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>