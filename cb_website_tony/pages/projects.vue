<template>
  <div id="projects-container">
    <p>Projects page</p>
    <NLink to="/">
      Retour
    </NLink>
    <div class="tabs is-centered">
      <ul>
        <li @click="isActive = 'tous'" :class="{ 'is-active': isActive == 'tous' }">
          <a>
            <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
            <span>Tous</span>
          </a>
        </li>
        <li @click="isActive = 'web'" :class="{ 'is-active': isActive == 'web' }">
          <a>
            <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
            <span>Web</span>
          </a>
        </li>
        <li @click="isActive = 'mobile'" :class="{ 'is-active': isActive == 'mobile' }">
          <a>
            <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
            <span>Mobile</span>
          </a>
        </li>
        <li @click="isActive = 'autres'" :class="{ 'is-active': isActive == 'autres' }">
          <a>
            <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
            <span>Autres</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- TO DO : v-for liste de tous les projets, avec v-if sur catégorie choisie -->
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