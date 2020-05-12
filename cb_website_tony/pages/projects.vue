<template>
  <div class="projects-container">

    <p>Projects page</p>
    <NLink to="/">
      Retour
    </NLink>

    <div class="tabs is-centered">
      <ul>
        <li @click="isActive = 'tous'" :class="{ 'is-active': isActive == 'tous' }">
          <a>
            <span class="icon is-small"><font-awesome-icon :icon="['fas', 'globe']" aria-hidden="true"></font-awesome-icon></span>
            <span>Tous</span>
          </a>
        </li>
        <li @click="isActive = 'web'" :class="{ 'is-active': isActive == 'web' }">
          <a>
            <span class="icon is-small"><font-awesome-icon :icon="['fas', 'desktop']" aria-hidden="true"></font-awesome-icon></span>
            <span>Web</span>
          </a>
        </li>
        <li @click="isActive = 'mobile'" :class="{ 'is-active': isActive == 'mobile' }">
          <a>
            <span class="icon is-small"><font-awesome-icon :icon="['fas', 'mobile-alt']" aria-hidden="true"></font-awesome-icon></span>
            <span>Mobile</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- TO DO : v-for liste de tous les projets, avec v-if sur catégorie choisie -->
    <div class="project-card">
      <div class="project-card-image-container">
        <figure class="project-card-image">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="project-card-content-container">
        <div class="project-card-informations">
          <p class="project-card-title">FAT</p>
          <p class="project-card-function">Dev Front</p>
        </div>
        <div class="project-card-content">
          <b-taglist>
              <b-tag type="is-info">First</b-tag>
              <b-tag type="is-info">Second</b-tag>
              <b-tag type="is-info">Third</b-tag>
              <b-tag type="is-info">Fourth</b-tag>
              <b-tag type="is-info">Fifth</b-tag>
          </b-taglist>
          <time datetime="2016-1-1">Jan 2016</time>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'inside',
  head: {
    title: 'Projets'
  },
  data () {
    return {
      isActive: 'tous',
    }
  },
  mounted () {
    // this.$nuxt.$loading.finish()
  }
}
</script>