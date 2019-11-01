<template>
    <div class="content-wrapper">
        <temp-var-charts :tempVar="tempVar"> </temp-var-charts>
        <today-highlights :highlights="highlights"> </today-highlights>
    </div>
</template>

<script>
import TempVarChart from './TempVarChart'
import Highlights from './Highlights'
    export default {
        props: ['highlights', 'tempVar'],
        components: {
            'temp-var-charts': TempVarChart,
            'today-highlights': Highlights
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="scss" scoped>
.content-wrapper {
    position: relative;
}
</style>