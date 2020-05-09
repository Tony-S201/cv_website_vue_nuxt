<template>
  <div>
    <h1>Bienvenue</h1>
    <b-button @click="goToAbout">
      <!-- <NLink to="/about">
        Voir le portfolio
      </NLink> -->
    </b-button>
  </div>
</template>

<script>
export default {
  layout: 'first',
  head: {
    title: 'Home page'
  },
  methods: {
    goToAbout () {
      this.$nuxt.$loading.start()

      setTimeout(() => {
        this.$router.push('/about')
      }, 5000)
    }
  }
}
</script>

