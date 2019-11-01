<template>
    <div>
        <p>Visibility Information: {{ visibility }}</p>
  </div>
</template>

<script>
    export default {
        props: ['highlights'],
        data() {
            return {
                visibility: this.highlights.visibility
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>