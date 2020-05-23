<template>
  <section class="single-entry">
    <div class="when">{{ theDate }}</div>
    <h1>{{ $page.title }}</h1>
    <Content />
    <footer></footer>
  </section>
</template>
<script>
import { format, parseISO } from 'date-fns';
import { it } from 'date-fns/locale';
export default {
  name: 'BlogEntry',
  computed: {
    theDate() {
      return format(parseISO(this.$page.frontmatter.when), 'dd/MM/yyyy');
    },
  },
};
</script>
<style lang="stylus" scoped>
.when
  font-family 'JetBrains Mono', monospace
</style>
