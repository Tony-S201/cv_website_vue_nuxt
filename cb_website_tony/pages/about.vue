<template>
  <div class="about-container">
    <p>About page</p>
    <NLink to="/">
      Retour
    </NLink>
  </div>
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
