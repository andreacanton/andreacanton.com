<template>
  <div class="meta">
    <ArticleDate :date="thePage.frontmatter.date" />
    -
    <ReadingTime :readingTime="thePage.readingTime" />
  </div>
</template>
<script>
import ReadingTime from './ReadingTime';
import ArticleDate from './ArticleDate';
export default {
  name: 'BlogEntryMeta',
  props: ['thePage'],
  components: {
    ReadingTime,
    ArticleDate,
  },
};
</script>
