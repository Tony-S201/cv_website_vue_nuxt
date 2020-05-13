<template>
  <section class="contact-container">
    <h1>Contact page</h1>
    <NLink to="/">
      Retour
    </NLink>
  </section>
</template>

<script>
export default {
  layout: 'inside',
  head: {
    title: 'Contact'
  },
  mounted () {
    // this.$nuxt.$loading.finish()
  }
}
</script>