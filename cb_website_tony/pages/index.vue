<template>
  <section class="home-layout-container">
    <div v-if="launch && !this.$store.state.alreadySeeHome" class="ml15">
      <div>
        <span class="word">swierz</span>
        <span class="word">tony</span>
      </div>
      <div>
        <span class="word">web</span>
        <span class="word">developer</span>
      </div>
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
      launch: false,
    }
  },
  beforeMount() {
    this.launch = true
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
