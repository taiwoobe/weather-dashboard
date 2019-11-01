<template>
    <div id="tempvarchart">
    <p>Temperature Information:</p>
    {{ tempVar }}
  </div>
</template>

<script>
    export default {
        props: ['tempVar']
    }
</script>

<style lang="scss" scoped>

</style>