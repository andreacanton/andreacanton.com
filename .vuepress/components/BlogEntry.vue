<template>
  <section class="single-entry">
    <div class="when">{{ theDate }}</div>
    <h1>{{ $page.title }}</h1>
    <Content />
    <footer>
      Ti ringrazio per aver dedicato del tempo per leggere una parte della mia
      opinione sulla vita, l'universo e tutto quanto. Se ti sembra che abbia
      detto qualcosa di sbagliato, o vuoi semplicemente dire la tua verità,
      <a :href="twitterLink">fammelo sapere con un tweet</a>.
      <!-- Se hai ancora voglia di starmi ad ascoltare,
      puoi <a href="/blog/">leggere altri articoli</a>. -->
    </footer>
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
    twitterLink() {
      const url = `http://www.andreacanton.com${this.$page.path}`;
      const text = `${url} via @andreacanton`;
      return `https://twitter.com/intent/tweet?text=${encodeURI(text)}`;
    },
  },
};
</script>
<style lang="stylus" scoped>
.when, footer
  font-family 'JetBrains Mono', monospace
footer
  padding 20px 0
</style>
