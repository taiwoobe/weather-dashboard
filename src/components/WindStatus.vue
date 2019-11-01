<template>
    <div>
    <p>Wind Status Information: </p>
    <p>Speed: {{ speed }}</p>
    <p>Direction: {{ direction }}</p>
  </div>
</template>

<script>
    export default {
        props: ['highlights'],
        data() {
            return {
                speed: this.highlights.windstatus.speed,
                direction: this.highlights.windstatus.direction
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>