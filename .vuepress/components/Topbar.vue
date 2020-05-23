<template>
  <header>
    <a class="logo" href="/">
      <picture>
        <img src="/images/me_thumb.jpg" alt="Andrea Canton - Web Developer" />
      </picture>
      Andrea Canton
    </a>
    <nav>
      <ul>
        <li>
          <a href="https://twitter.com/andreacanton">
            <Icon name="twitter" />
          </a>
        </li>
        <li>
          <a href="https://github.com/andreacanton">
            <Icon name="github" />
          </a>
        </li>
        <li>
          <a href="https://dev.to/andreacanton">
            <Icon name="devto" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Topbar',
};
</script>
<style lang="stylus" scoped>
header
  padding 10px 0
  display flex
  align-items center
  justify-content space-between
  margin-bottom 20px
picture
  img
    border-radius 50%
    border 2px solid lighten($grey, 30%)
    margin-right: 10px
    transition border-color 120ms ease-in-out
a.logo
  display block
  text-decoration none
  color $textColor
  font-size 30px
  font-weight 700
  transition color 120ms ease-in-out
  &:hover
    color: darken($textColor, 50%)
    picture img
      border-color: darken($grey, 20%)
nav
  font-family 'JetBrains Mono'
  ul
    list-style none
    display flex
    justify-content center
    align-items center
    li
      margin 0 15px
</style>
