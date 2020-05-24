<template>
  <div class="container">
    <Home v-if="isHome" />
    <template v-else>
      <Topbar />
      <Blog v-if="isBlog" />
      <BlogEntry v-else />
      <footer>
        Build with Vuepress -
        <a
          href="https://github.com/andreacanton/andreacanton.com"
          target="_blank"
          >github repo</a
        >
        - All content is under
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/"
          target="_blank"
          >CC BY-SA 4.0</a
        >
        license
      </footer>
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
  width auto
  padding 0 10px
@media screen and (min-width: 620px)
  .container
    width 600px
    margin 0 auto

footer
  padding 30px 0
  font-size 11px
  color lighten($textColor, 30%)
  text-align center
  a
    color lighten($textColor, 30%)
    background-image: linear-gradient(transparent 0%, transparent  calc(50% - 1px), lighten($textColor, 30%)  calc(50% - 1px), lighten($textColor, 30%) 100%)
    &:hover
      color $darkTextColor
</style>
