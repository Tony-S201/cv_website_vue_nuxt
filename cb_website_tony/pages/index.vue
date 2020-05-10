<template>
  <div>
    <h1>Bienvenue</h1>
    <button @click="goToAbout">
        Voir le portfolio
    </button>
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

