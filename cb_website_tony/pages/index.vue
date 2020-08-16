<template>
  <section class="home-layout-container">
      <h1 class="ml15">
        <div>
          <span class="word">swierz</span>
          <span class="word">tony</span>
        </div>
        <div>
          <span class="word">web</span>
          <span class="word">developer</span>
        </div>
      </h1>
      <div>
        <nuxt-link to="/about"><button class="home-goto-button is-size-4 has-text-weight-bold has-text-white"><h2>Go</h2></button></nuxt-link>
      </div>
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
    if (this.$store.state.alreadySeeHome != true) {
      setTimeout(function () { 
        this.$store.dispatch('switchSeeTrue');
        this.$router.push('/about'); 
      }.bind(this), 5000)
    } else {
      this.$router.push('/about');
    }
  }
}
</script>
