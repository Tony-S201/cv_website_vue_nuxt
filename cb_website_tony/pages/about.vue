<template>
  <section class="about-container">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/">{{ langs[activeLanguage].menu.title_home }}</nuxt-link></li>
        <li class="is-active"><a href="#" aria-current="page">{{ langs[activeLanguage].menu.title_about }}</a></li>
      </ul>
    </nav>
    <h1 class="section-titles">About</h1>
    <div>
      <div>
        <h2 class="subtitle about-titles has-text-weight-bold"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="800"><img class="icon is-large about-title-pictures" src="~/assets/img/about-icons/icons8-administrateur-homme-100.png"/>{{ langs[activeLanguage].about.aboutperson.title }}</h2>
          
        <p
          data-sal="slide-left"
          data-sal-delay="800"
          data-sal-duration="1000">{{ langs[activeLanguage].about.aboutperson.text }}</p>
        <br>
        
        <h2 class="subtitle about-titles has-text-weight-bold"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="800"><img class="icon is-large about-title-pictures" src="~/assets/img/about-icons/icons8-ordinateur-100.png"/>{{ langs[activeLanguage].about.work.title }}</h2>
        <p
          data-sal="slide-left"
          data-sal-delay="800"
          data-sal-duration="1000">{{ langs[activeLanguage].about.work.text }}</p>
        <br>
        
        <h2 class="subtitle about-titles has-text-weight-bold"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="800"><img class="icon is-large about-title-pictures" src="~/assets/img/about-icons/icons8-étagère-à-livres-100.png"/>{{ langs[activeLanguage].about.study.title }}</h2>
        <p
          data-sal="slide-left"
          data-sal-delay="800"
          data-sal-duration="1000">{{ langs[activeLanguage].about.study.text }}</p>
        <br>

        <h2 class="subtitle about-titles has-text-weight-bold"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="800"><img class="icon is-large about-title-pictures" src="~/assets/img/about-icons/icons8-masque-tuba-100.png"/>{{ langs[activeLanguage].about.hobbies.title }}</h2>
        <p
          data-sal="slide-left"
          data-sal-delay="800"
          data-sal-duration="1000">{{ langs[activeLanguage].about.hobbies.text }}</p>

      </div>
      <div class="about-steps">
        <b-steps>
          <b-step-item label="Monkey Monk" icon="account-key">
            Blablablablablablablablabla
          </b-step-item>
          <b-step-item label="O'clock" icon="account">
            Blablablablablablablablabla
          </b-step-item>
        </b-steps>
      </div>
    </div>
  </section>
</template>

<script>
import fr from '../assets/datas/fr.json'
import en from '../assets/datas/en.json'
import sal from 'sal.js' 
import { mapState } from 'vuex'

export default {
  layout: 'inside',
  head: {
    title: 'A propos | ST'
  },
  data () {
    return {
      langs: { en: en , fr: fr },
    }
  },
  computed: mapState({
    activeLanguage: state => state.selectLanguage,
  }),
  mounted () {
    sal({
      threshold: 0,
    });
  }
}
</script>

<style>
@import "~/node_modules/sal.js/dist/sal.css";
</style>
