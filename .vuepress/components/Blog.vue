<template>
  <div>
    <div class="blog-entry" v-for="entry in blogPages">
      <div class="meta">
        <BlogEntryMeta :thePage="entry" />
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
import BlogEntryMeta from './BlogEntryMeta';

export default {
  name: 'Blog',
  components: { BlogEntryMeta },
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
};
</script>
<style lang="stylus" scoped>
.blog-entry
    font-family 'JetBrains Mono'
    .meta
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
