<template>
  <div class="contact-container">
    <p>Contact page</p>
    <NLink to="/">
      Retour
    </NLink>
  </div>
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