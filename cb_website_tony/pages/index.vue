<template>
  <section class="home-layout-container">
    <div class="home-text-container">
      <div class="home-left">
        <div class="home-left-title is-uppercase is-size-3-mobile is-size-2-tablet is-size-1-desktop">
          <p>Swierz Tony</p>
          <p>WEB DEVELOPER</p>
          <p>DEVELOPPEUR WEB</p>
        </div>
        <div class="home-left-description is-size-4-mobile is-size-3-tablet is-size-2-desktop">
          <p>Welcome to my website</p>
          <p>Bienvenue sur mon site</p>
        </div>
        <div class="home-left-button-container">
          <button class="is-uppercase home-left-button is-size-6-mobile is-size-5-tablet" @click="goToWebsite()">Let's go <br> C'est parti</button>
        </div>
      </div>
      <div class="home-right">
        <img src="~/assets/img/landing-page/undraw_researching_22gp.svg" />
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
    }
  },
  methods: {
    goToWebsite() {
      this.$router.push('/about')
    }
  },
  mounted () {
    this.isLoading = false
  }
}
</script>
