<template>
  <div class="home">
    <Content :highlights="highlights" :tempVar="tempVar"></Content>
  </div>
</template>

<script>
import Content from '@/components/Content'
export default {
  name: 'home',
  components: {
    Content
  },
  data() {
    return {
      tempVar: {
        tempToday: [
          {hour: '11.00 AM', temp: '35'},
          {hour: '12.00 PM', temp: '36'},
          {hour: '1.00 PM', temp: '37'},
          {hour: '2.00 PM', temp: '38'},
          {hour: '3.00 PM', temp: '36'},
          {hour: '4.00 PM', temp: '35'},
        ],
      },
      highlights: {
        uvIndex: 4,
        visibility: 10,
        windStatus: {
          windSpeed: '30 km/h',
          windDirection: '30',
          derivedWindDirection: 'NNE',
        },
      },
    }
  },
}
</script>
