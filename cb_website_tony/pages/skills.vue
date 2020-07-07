<template>
  <section class="skills-container">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/">{{ langs[activeLanguage].menu.title_home }}</nuxt-link></li>
        <li class="is-active"><a href="#" aria-current="page">{{ langs[activeLanguage].menu.title_skills }}</a></li>
      </ul>
    </nav>
    <h1 class="section-titles">{{ langs[activeLanguage].menu.title_skills }}</h1>

    <div class="skills-blocks-container">
      <div class="skills-left-technologies">
        <h2 class="skills-titles has-text-centered has-text-weight-bold"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="600"
          data-sal-easing="ease-out-bounce">{{ langs[activeLanguage].skills.titles.technologies }}</h2>
        <div class="skills-technologies-container has-text-centered" 
          data-sal="slide-right"
          data-sal-delay="1000"
          data-sal-duration="800"
          data-sal-easing="ease-out-bounce">
          <div class="skills-technologies-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-vuejs.svg"/>
            <span class="skills-items-text">VueJS, NuxtJS</span>
          </div>
          <div class="skills-technologies-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-javascript.svg"/>
            <span class="skills-items-text">JavaScript</span>
          </div>
          <div class="skills-technologies-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-react-native.svg"/>
            <span class="skills-items-text">ReactNative</span>
          </div>
          <div class="skills-technologies-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-html-5.svg"/>
            <span class="skills-items-text">HTML</span>
          </div>
          <div class="skills-technologies-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-sass.svg"/>
            <span class="skills-items-text">CSS, Sass</span>
          </div>
          <div class="skills-technologies-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-logo-php.svg"/>
            <span class="skills-items-text">PHP</span>
          </div>
          <div class="skills-technologies-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-laravel.svg"/>
            <span class="skills-items-text">Laravel</span>
          </div>
          <div class="skills-technologies-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-wordpress.svg"/>
            <span class="skills-items-text">WordPress</span>
          </div>
        </div>
      </div>
      <div class="skills-center-line"
          data-sal="flip-up"
          data-sal-delay="200"
          data-sal-duration="1000"
          data-sal-easing="ease-out-bounce">
      </div>
      <div class="skills-right-tools">
        <h2 class="skills-titles has-text-centered has-text-weight-bold"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="600"
          data-sal-easing="ease-out-bounce">{{ langs[activeLanguage].skills.titles.tools }}</h2>
        <div class="skills-tools-container has-text-centered" 
          data-sal="slide-left"
          data-sal-delay="1000"
          data-sal-duration="800"
          data-sal-easing="ease-out-bounce">
          <div class="skills-tools-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-git.svg"/>
            <span class="skills-items-text">Git</span>
          </div>
          <div class="skills-tools-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-docker.svg"/>
            <span class="skills-items-text">Docker</span>
          </div>
          <div class="skills-tools-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-gitlab.svg"/>
            <span class="skills-items-text">Gitlab</span>
          </div>
          <div class="skills-tools-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-github.svg"/>
            <span class="skills-items-text">Github</span>
          </div>
          <div class="skills-tools-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-slack.svg"/>
            <span class="skills-items-text">Slack</span>
          </div>
          <div class="skills-tools-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-trello.svg"/>
            <span class="skills-items-text">Trello</span>
          </div>
          <div class="skills-tools-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-npm.svg"/>
            <span class="skills-items-text">Npm</span>
          </div>
          <div class="skills-tools-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-vscode.svg"/>
            <span class="skills-items-text">VScode</span>
          </div>
          <div class="skills-tools-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/balsamiq.png"/>
            <span class="skills-items-text">Balsamiq Mockups</span>
          </div>
          <div class="skills-tools-items">
            <img class="image is-48x48" src="~/assets/img/skills-icons/icons8-postman.png"/>
            <span class="skills-items-text">Postman</span>
          </div>
        </div>
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
      title: this.activeLanguage == 'fr' ? 'Compétences | ST' : 'Skills | ST'
    }
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
    sal();
  }
}
</script>

<style>
@import "~/node_modules/sal.js/dist/sal.css";
</style>