<template>
  <div id="skills-container">
    <p>Technologies page</p>
    <NLink to="/">
      Retour
    </NLink>
  </div>
</template>

<script>
export default {
  layout: 'inside',
  head: {
    title: 'Technologies'
  },
  mounted () {
    // this.$nuxt.$loading.finish()
  }
}
</script>