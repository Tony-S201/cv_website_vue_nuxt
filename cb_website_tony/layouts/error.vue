<template>
  <div class="container">
    <div v-if="error.statusCode === 404">
        <h1>Oops...</h1>
        <h1>Page not found !</h1>
    </div>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/"><button class="button" type="button">Home page</button></nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>