<template>
  <span class="article-date" :title="`ben ${theDistanceDate} fa`">
    {{ theDate }}
  </span>
</template>
<script>
import { isValid, format, formatDistanceToNow, parseISO } from 'date-fns';
import { it } from 'date-fns/locale';

export default {
  name: 'ArticleDate',
  props: ['date'],
  computed: {
    theDate() {
      const parsedDate = parseISO(this.date);
      return isValid(parsedDate)
        ? format(parsedDate, 'dd/MM/yyyy', { locale: it })
        : this.date;
    },
    theDistanceDate() {
      const parsedDate = parseISO(this.date);
      return isValid(parsedDate)
        ? formatDistanceToNow(parsedDate, { locale: it })
        : this.date;
    },
  },
};
</script>
<style lang="stylus" scoped>
.article-date
  cursor help
</style>
