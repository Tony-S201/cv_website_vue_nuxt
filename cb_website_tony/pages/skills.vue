<template>
  <section class="skills-container">
    <h1 class="section-titles">Compétences page</h1>

    <div class="skills-blocks-container">
      <div class="skills-left-technologies">
        <h2 class="skills-titles has-text-centered has-text-weight-bold"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="600"
          data-sal-easing="ease-out-bounce">Technologies</h2>
        <div class="skills-technologies-container has-text-centered" 
          data-sal="slide-right"
          data-sal-delay="1000"
          data-sal-duration="800"
          data-sal-easing="ease-out-bounce">
          <div class="skills-technologies-items">
            <font-awesome-icon class="icon is-large" :icon="['fab', 'vuejs']" aria-hidden="true"></font-awesome-icon>
            <span class="skills-items-text">VueJS, NuxtJS</span>
          </div>
          <div class="skills-technologies-items">
            <font-awesome-icon class="icon is-large" :icon="['fab', 'js']" aria-hidden="true"></font-awesome-icon>
            <span class="skills-items-text">JavaScript</span>
          </div>
          <div class="skills-technologies-items">
            <font-awesome-icon class="icon is-large" :icon="['fab', 'react']" aria-hidden="true"></font-awesome-icon>
            <span class="skills-items-text">ReactNative</span>
          </div>
          <div class="skills-technologies-items">
            <font-awesome-icon class="icon is-large" :icon="['fab', 'html5']" aria-hidden="true"></font-awesome-icon>
            <span class="skills-items-text">HTML</span>
          </div>
          <div class="skills-technologies-items">
            <font-awesome-icon class="icon is-large" :icon="['fab', 'sass']" aria-hidden="true"></font-awesome-icon>
            <span class="skills-items-text">CSS, Sass</span>
          </div>
          <div class="skills-technologies-items">
            <font-awesome-icon class="icon is-large" :icon="['fab', 'php']" aria-hidden="true"></font-awesome-icon>
            <span class="skills-items-text">PHP</span>
          </div>
          <div class="skills-technologies-items">
            <font-awesome-icon class="icon is-large" :icon="['fab', 'laravel']" aria-hidden="true"></font-awesome-icon>
            <span class="skills-items-text">Laravel</span>
          </div>
          <div class="skills-technologies-items">
            <font-awesome-icon class="icon is-large" :icon="['fab', 'wordpress']" aria-hidden="true"></font-awesome-icon>
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
          data-sal-easing="ease-out-bounce">Outils</h2>
        <div class="skills-tools-container has-text-centered" 
          data-sal="slide-left"
          data-sal-delay="1000"
          data-sal-duration="800"
          data-sal-easing="ease-out-bounce">
          <div class="skills-tools-items">
            <font-awesome-icon class="icon is-large" :icon="['fab', 'git']" aria-hidden="true"></font-awesome-icon>
            <span class="skills-items-text">Git</span>
          </div>
          <div class="skills-tools-items">
            <font-awesome-icon class="icon is-large" :icon="['fab', 'gitlab']" aria-hidden="true"></font-awesome-icon>
            <span class="skills-items-text">Gitlab</span>
          </div>
          <div class="skills-tools-items">
            <font-awesome-icon class="icon is-large" :icon="['fab', 'github']" aria-hidden="true"></font-awesome-icon>
            <span class="skills-items-text">Github</span>
          </div>
          <div class="skills-tools-items">
            <font-awesome-icon class="icon is-large" :icon="['fab', 'slack']" aria-hidden="true"></font-awesome-icon>
            <span class="skills-items-text">Slack</span>
          </div>
          <div class="skills-tools-items">
            <font-awesome-icon class="icon is-large" :icon="['fab', 'trello']" aria-hidden="true"></font-awesome-icon>
            <span class="skills-items-text">Trello</span>
          </div>
          <div class="skills-tools-items">
            <font-awesome-icon class="icon is-large" :icon="['fab', 'npm']" aria-hidden="true"></font-awesome-icon>
            <span class="skills-items-text">Npm</span>
          </div>
          <div class="skills-tools-items">
            <img class="icon is-large" src="~/assets/img/vscode.svg"/>
            <span class="skills-items-text">VScode</span>
          </div>
          <div class="skills-tools-items">
            <img class="icon is-large" src="~/assets/img/balsamiq.png"/>
            <span class="skills-items-text">Balsamiq Mockups</span>
          </div>
          <div class="skills-tools-items">
            <img class="icon is-large" src="~/assets/img/postman.png"/>
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

export default {
  layout: 'inside',
  head: {
    title: 'Technologies'
  },
  mounted () {
    sal();
    // this.$nuxt.$loading.finish()
  }
}
</script>

<style>
@import "~/node_modules/sal.js/dist/sal.css";
</style>