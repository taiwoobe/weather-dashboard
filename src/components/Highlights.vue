<template>
    <div id="tempvarchart">
    <p>Temperature Highlights:</p>
    {{ highlights }}
  </div>
</template>

<script>
    export default {
        props: ['highlights']
    }
</script>

<style lang="scss" scoped>

</style>