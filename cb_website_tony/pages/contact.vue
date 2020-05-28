<template>
  <section class="contact-container">
    <h1 class="section-titles">Contact</h1>
  </section>
</template>

<script>
import sal from 'sal.js'

export default {
  layout: 'inside',
  head: {
    title: 'Contact'
  },
  mounted () {
    // this.$nuxt.$loading.finish()
    sal({
      threshold: 0,
    });
  }
}
</script>