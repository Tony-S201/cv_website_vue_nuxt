<template>
  <section class="skills-container">
    <h1>Technologies page</h1>
    <NLink to="/">
      Retour
    </NLink>
    <div class="skills-blocks-container">
      <div class="skills-left-technologies">
        <h2 class="skills-titles">Technologies</h2>
        <div class="skills-technologies-container">
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
            <span class="skills-items-text">React-Native</span>
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
      <div class="skills-center-line">
      </div>
      <div class="skills-left-tools">
        <h2 class="skills-titles">Outils</h2>
        <div class="skills-tools-container">
          <div class="skills-tools-items">
          </div>
          <div class="skills-tools-items">
          </div>
          <div class="skills-tools-items">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'inside',
  head: {
    title: 'Technologies'
  },
  mounted () {
    // this.$nuxt.$loading.finish()
  }
}
</script>