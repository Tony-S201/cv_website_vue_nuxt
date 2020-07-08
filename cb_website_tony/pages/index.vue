<template>
  <section class="home-layout-container">
    <div class="home-clip-up"></div>
    <div class='home-title-one console-container'>
      <span id='text'></span>
      <div class='console-underscore' id='console'>&#95;</div>
    </div>
    <div class="home-goto-container has-text-centered">
      <nuxt-link to="/about"><button class="home-goto-button is-size-4 has-text-weight-bold has-text-white"><h2>Go</h2></button></nuxt-link>
<!--       <div class="home-goto-icon">
        <font-awesome-icon :icon="['fas', 'hand-pointer']" aria-hidden="true"></font-awesome-icon>
      </div> -->
    </div>
    <div class="home-clip-down"></div>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
  </section>
</template>

<script>
export default {
  layout: 'first',
  head: {
    title: 'Tony Swierz | Développeur Web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'portfolio, developer'},
      { hid: 'description', name: 'description', content: 'Tony Swierz, développeur web de Bordeaux. Venez découvrir mon site portfolio.'}
    ],
  },
  data () {
    return {
      isLoading: true,
      isFullPage: true,
    }
  },
  mounted () {
    this.isLoading = false
    if (process.browser) {
      require('~/assets/js/title.js')
    }
  }
}
</script>
