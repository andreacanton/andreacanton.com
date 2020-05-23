<template>
  <div class="container">
    <Home v-if="isHome" />
    <template v-else>
      <Topbar />
      <Blog v-if="isBlog" />
      <BlogEntry v-else />
    </template>
  </div>
</template>
<script>
import Home from '../components/Home';
import Topbar from '../components/Topbar';
import Blog from '../components/Blog';
import BlogEntry from '../components/BlogEntry';
export default {
  name: 'Layout',
  components: { Home, Topbar, Blog, BlogEntry },
  computed: {
    isHome() {
      return this.$page.path == '/';
    },
    isBlog() {
      return this.$page.path == '/blog/';
    },
  },
};
</script>
<style lang="stylus" scoped>
.container
  width 650px
  margin 0 auto
</style>
