<template>
  <div class="error-container">
    <div class="error-text has-text-centered has-text-white" v-if="error.statusCode === 404">
      <h1 class="has-text-weight-bold is-size-1">Oops...</h1>
      <h1 v-if="error.statusCode !== 404">An error occurred</h1>
      <h1 v-if="error.statusCode === 404" class="is-uppercase has-text-weight-bold">Page not found !</h1>
      <img :src="require(`../assets/img/error.png`)" alt="Placeholder image">
    </div>
    <div class="error-button has-text-centered">
      <nuxt-link to="/"><b-button class="button is-info has-text-weight-bold is-uppercase" type="button">BACK TO HOME</b-button></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>