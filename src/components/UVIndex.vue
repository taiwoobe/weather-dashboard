<template>
    <div>
        <p>UV Index Information: {{ uvIndex }}</p>
  </div>
</template>

<script>
    export default {
        props: ['highlights'],
        data() {
            return {
                uvIndex: this.highlights.uvindex
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>