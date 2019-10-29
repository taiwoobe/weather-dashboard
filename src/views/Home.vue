<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Content v-bind:weather_data="weather_data"></Content>
  </div>
</template>

<script>
// @ is an alias to /src
import Content from '@/components/Content'

export default {
  name: 'home',
  components: {
    Content
  },
  data() {
    return {
      weather_data: {
        location: "California",
        temperature: {
          current: "35 C",
        },
        highlights: {
          uvindex: "3",
          windstatus: {
            speed: "20 km/h",
            direction: "N-E",
          },
          visibility: "12 km",
        },
      },
    }
  },
}
</script>
