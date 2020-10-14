<template>
  <section class="home-layout-container">
    <div class="home-text-container">
      <div class="home-left">
        <div class="home-left-title is-uppercase is-size-3-mobile is-size-2-tablet is-size-1-desktop">
          <p>Swierz Tony</p>
          <p>{{ langs[activeLanguage].index.first_line }}</p>
        </div>
        <div class="home-left-description is-size-4-mobile is-size-3-tablet is-size-2-desktop">
          <p>{{ langs[activeLanguage].index.second_line }}</p>
        </div>
        <div class="home-left-button-container">
          <button class="is-uppercase home-left-button is-size-6-mobile is-size-5-tablet" @click="goToWebsite()">{{ langs[activeLanguage].index.start }}</button>
        </div>
      </div>
      <div class="home-right">
        <img class="home-right-image" alt="A laravel vuejs developer" src="~/assets/img/undraw_laravel_and_vue_59tp.svg" />
      </div>
    </div>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
  </section>
</template>

<script>
import fr from '../assets/datas/fr.json'
import en from '../assets/datas/en.json'
import { mapState } from 'vuex'

export default {
  layout: 'first',
  head() {
    return {
      title: this.activeLanguage == 'fr' ? 'Tony Swierz | Développeur Web' : 'Tony Swierz | Web Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: 'portfolio, developer'},
        { hid: 'description', name: 'description', content: 'Tony Swierz, développeur web de Bordeaux. Venez découvrir mon site portfolio.'}
      ],
    }
  },
  data () {
    return {
      isLoading: true,
      isFullPage: true,
      langs: { en: en , fr: fr },
    }
  },
  methods: {
    goToWebsite() {
      this.$router.push('/about')
    }
  },
  computed: mapState({
    activeLanguage: state => state.selectLanguage,
  }),
  mounted () {
    this.isLoading = false
  }
}
</script>
