<template>
  <section class="about-container">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/">{{ langs[activeLanguage].menu.title_home }}</nuxt-link></li>
        <li class="is-active"><a href="#" aria-current="page">{{ langs[activeLanguage].menu.title_about }}</a></li>
      </ul>
    </nav>
    <h1 class="section-titles">About</h1>
    <div class="about-subcontainer">
      <div class="about-text">
        <h2 class="subtitles-group is-size-4 has-text-weight-bold has-text-centered"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="800">{{ langs[activeLanguage].about.text.title }}</h2>
        <h2 class="subtitle about-titles has-text-weight-bold"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="800"><img class="icon is-large about-title-pictures" src="~/assets/img/about-icons/icons8-utilisateur-masculin.svg"/>{{ langs[activeLanguage].about.text.aboutperson.title }}</h2>
          
        <p
          data-sal="slide-left"
          data-sal-delay="800"
          data-sal-duration="1000">{{ langs[activeLanguage].about.text.aboutperson.text }}</p>
        <br>

        <h2 class="subtitle about-titles has-text-weight-bold"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="800"><img class="icon is-large about-title-pictures" src="~/assets/img/about-icons/icons8-document.svg"/>{{ langs[activeLanguage].about.text.degree.title }}</h2>
        <p
          data-sal="slide-left"
          data-sal-delay="800"
          data-sal-duration="1000">{{ langs[activeLanguage].about.text.degree.text_first }}</p>
        <p
        data-sal="slide-left"
        data-sal-delay="800"
        data-sal-duration="1000">{{ langs[activeLanguage].about.text.degree.text_second }}</p>
      </div>
      <div class="about-steps">
        <h2 class="subtitles-group is-size-4 has-text-weight-bold has-text-centered"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="800">{{ langs[activeLanguage].about.experience.title }}</h2>
        <b-steps class="about-steps-container" 
          :label-position="labelPosition"
          vertical >
          <b-step-item class="about-steps-first" :label="this.langs[this.activeLanguage].about.experience.first.date + ' - ' + this.langs[this.activeLanguage].about.experience.first.enterprise" icon="" :clickable="clickable" >
            <h2 class="subtitle about-titles has-text-weight-bold">
              {{ langs[activeLanguage].about.experience.first.enterprise }}
            </h2>
            <p class="about-steps-paragraphs">
              {{ langs[activeLanguage].about.experience.first.description }}
            </p>
            <p class="about-steps-paragraphs">
              {{ langs[activeLanguage].about.experience.first.description_second }}
            </p>

          </b-step-item>
          <b-step-item class="about-steps-second" :label="this.langs[this.activeLanguage].about.experience.second.date + ' - ' + this.langs[this.activeLanguage].about.experience.second.enterprise" icon="" :clickable="clickable">
            <h2 class="subtitle about-titles has-text-weight-bold">
              {{ langs[activeLanguage].about.experience.second.enterprise }}
            </h2>
            <p class="about-steps-paragraphs">
              {{ langs[activeLanguage].about.experience.second.description }}
            </p>
            <p class="about-steps-paragraphs">
              {{ langs[activeLanguage].about.experience.second.description_second }}
            </p>
            <p class="about-steps-paragraphs">
              {{ langs[activeLanguage].about.experience.second.description_third }}
            </p>
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
  head () {
    return {
      title: this.activeLanguage == 'fr' ? 'A propos | ST' : 'About | ST',
    }
  },
  data () {
    return {
      langs: { en: en , fr: fr },
      labelPosition: "right",
      clickable: true,
      labelFirst: '',
      labelSecond: '',
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
