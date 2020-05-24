<template>
  <div>
    <div class="blog-entry" v-for="entry in blogPages">
      <div class="when" :title="formatDate(entry.frontmatter.when)">
        pubblicato {{ entry.frontmatter.when | distanceDate }} fa
      </div>
      <h2>
        <a :href="entry.path">{{ entry.title }}</a>
      </h2>
    </div>
  </div>
</template>
<script>
import { isValid, format, formatDistanceToNow, parseISO } from 'date-fns';
import { it } from 'date-fns/locale';

export default {
  name: 'Blog',
  computed: {
    blogPages() {
      const blogPages = this.$site.pages.filter(
        p =>
          /^\/blog\/.+$/.test(p.path) &&
          p.title &&
          p.frontmatter.when &&
          isValid(parseISO(p.frontmatter.when)) &&
          !p.frontmatter.draft
      );
      return blogPages;
    },
  },
  filters: {
    distanceDate(value) {
      const parsedValue = parseISO(value);
      return isValid(parsedValue)
        ? formatDistanceToNow(parsedValue, { locale: it })
        : value;
    },
  },
  methods: {
    formatDate(value) {
      const parsedValue = parseISO(value);
      return isValid(parsedValue) ? format(parsedValue, 'dd-MM-yyyy') : value;
    },
  },
};
</script>
<style lang="stylus" scoped>
.blog-entry
    font-family 'JetBrains Mono'
    .when
      cursor help
    h2
      font-size 35px
      margin-top 0
      a
        text-decoration none
        color $textColor
        transition color 120ms ease-in-out
        &:hover
          color: darken($textColor, 50%)
</style>
