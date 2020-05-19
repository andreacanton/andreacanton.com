<template>
  <Home v-if="isHome" />
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
