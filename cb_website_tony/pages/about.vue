<template>
  <div>
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
    title: 'About page'
  },
  mounted () {
    this.$nuxt.$loading.finish()
  }
}
</script>
