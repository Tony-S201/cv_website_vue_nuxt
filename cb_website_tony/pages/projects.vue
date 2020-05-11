<template>
  <div id="projects-container">
    <p>Projects page</p>
    <NLink to="/">
      Retour
    </NLink>
  </div>
</template>

<script>
export default {
  layout: 'inside',
  head: {
    title: 'Projets'
  },
  mounted () {
    // this.$nuxt.$loading.finish()
  }
}
</script>