<template>
  <section class="single-entry">
    <div class="date">{{ theDate }}</div>
    <h1>{{ $page.title }}</h1>
    <Content />
    <footer>
      <p>
        Ti ringrazio per aver dedicato del tempo per leggere una parte della mia
        opinione sulla vita, l'universo e tutto quanto. Se ti sembra che abbia
        detto qualcosa di sbagliato, o vuoi semplicemente dire la tua verità,
        <a :href="twitterLink">fammelo sapere con un tweet</a>. Ok dai, puoi
        <a href="/blog/">leggere altri articoli</a>.
      </p>
      <p class="last-update">
        Ultimo aggiornamento: {{ this.$page.lastUpdated }}
      </p>
    </footer>
  </section>
</template>
<script>
import { isValid, format, parseISO, parse } from 'date-fns';
export default {
  name: 'BlogEntry',
  computed: {
    theDate() {
      const parsedDate = parseISO(this.$page.frontmatter.date);
      return isValid(parsedDate) ? format(parsedDate, 'dd/MM/yyyy') : '';
    },
    twitterLink() {
      const url = `http://www.andreacanton.com${this.$page.path}`;
      const text = `${url} via @andreacanton`;
      return `https://twitter.com/intent/tweet?text=${encodeURI(text)}`;
    },
  },
};
</script>
<style lang="stylus" scoped>
.date, footer
  font-family 'JetBrains Mono', monospace
footer
  padding 20px 0
  .last-update
    text-align right
    font-size 0.7em
</style>
