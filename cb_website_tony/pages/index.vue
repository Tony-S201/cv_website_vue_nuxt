<template>
  <div>
    <div id="home-title-container">
      <h1>Swierz Tony</h1>
      <h2>Développeur Web</h2>
    </div>
    <div id="home-goto-container">
      <b-button @click="goToAbout">Voir le portfolio</b-button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'first',
  head: {
    title: 'Accueil'
  },
  methods: {
    goToAbout () {
      this.$nuxt.$loading.start()

      setTimeout(() => {
        this.$router.push('/about')
      }, 3000)
    }
  }
}
</script>

