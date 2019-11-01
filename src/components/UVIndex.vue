<template>
    <div>
        <p>UV Index: {{ uvIndex }}</p>
  </div>
</template>

<script>
    export default {
        props: ['highlights'],
        data() {
            return {
                uvIndex: this.highlights.uvIndex
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>