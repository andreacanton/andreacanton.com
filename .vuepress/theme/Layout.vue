<template>
  <div class="container">
    <Home v-if="isHome" />
    <template v-else>
      <Content />
    </template>
  </div>
</template>
<script>
import Home from '../components/Home';
export default {
  name: 'Layout',
  components: { Home },
  computed: {
    isHome() {
      return this.$page.path == '/';
    },
  },
};
</script>
<style lang="stylus" scoped>
.container
  width 600px
  margin 0 auto
</style>
