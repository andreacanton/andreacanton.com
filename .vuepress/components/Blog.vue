<template>
  <div>
    <div class="blog-entry" v-for="entry in blogPages">
      <div
        class="date"
        :title="`ben ${distanceDate(entry.frontmatter.date)} fa`"
      >
        {{ entry.frontmatter.date | longDate }}
      </div>
      <h2>
        <a :href="entry.path">{{ entry.title }}</a>
      </h2>
    </div>
  </div>
</template>
<script>
import {
  isValid,
  format,
  formatDistanceToNow,
  parseISO,
  compareDesc,
} from 'date-fns';
import { it } from 'date-fns/locale';

export default {
  name: 'Blog',
  computed: {
    blogPages() {
      const blogPages = this.$site.pages.filter(
        p =>
          /^\/blog\/.+$/.test(p.path) &&
          p.title &&
          p.frontmatter.date &&
          isValid(parseISO(p.frontmatter.date)) &&
          !p.frontmatter.draft
      );
      blogPages.sort((a, b) => {
        const aDate = parseISO(a.frontmatter.date);
        const bDate = parseISO(b.frontmatter.date);
        return compareDesc(aDate, bDate);
      });
      return blogPages;
    },
  },
  filters: {
    longDate(value) {
      const parsedValue = parseISO(value);
      return isValid(parsedValue)
        ? format(parsedValue, 'dd/MM/yyyy', { locale: it })
        : value;
    },
  },
  methods: {
    distanceDate(value) {
      const parsedValue = parseISO(value);
      return isValid(parsedValue)
        ? formatDistanceToNow(parsedValue, { locale: it })
        : value;
    },
  },
};
</script>
<style lang="stylus" scoped>
.blog-entry
    font-family 'JetBrains Mono'
    .date
      cursor help
      font-size .8rem
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
