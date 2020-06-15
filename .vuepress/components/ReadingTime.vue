<template>
  <span class="reading-time" title="tempo di lettura (245 ppm)">{{
    theReadingTime
  }}</span>
</template>
<script>
export default {
  name: 'ReadingTime',
  props: ['readingTime'],
  computed: {
    theReadingTime() {
      return `${Math.ceil(this.readingTime.minutes)} min`;
    },
  },
};
</script>
<style lang="stylus" scoped>
.reading-time
  cursor help
</style>
