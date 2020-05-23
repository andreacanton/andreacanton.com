<template>
  <section class="single-entry">
    <div class="when">{{ $page.frontmatter.when }}</div>
    <h1 class="entry-title">{{ $page.title }}</h1>
    <Content />
    <footer></footer>
  </section>
</template>
<script>
export default {
  name: 'BlogEntry',
};
</script>
<style lang="stylus" scoped>
.when
  font-family 'JetBrains Mono' monospace;
</style>
