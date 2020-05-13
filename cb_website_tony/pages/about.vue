<template>
  <section class="about-container">
    <h1>About page</h1>
    <NLink to="/">
      Retour
    </NLink>
  </section>
</template>

<script>
export default {
  layout: 'inside',
  head: {
    title: 'A propos'
  },
  mounted () {
    // this.$nuxt.$loading.finish()
  }
}
</script>
