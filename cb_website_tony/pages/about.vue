<template>
  <section class="about-container">
    <h1 class="section-titles">About</h1>
    <div v-for="item in langs[languageActive].about" :key="item.id">
      <h2 class="subtitle"
        data-sal="fade"
        data-sal-delay="200"
        data-sal-duration="800">{{ item.title }}</h2>
      <p
        data-sal="slide-left"
        data-sal-delay="800"
        data-sal-duration="1000">{{ item.text }}</p>
      <br>
      <p v-if="item.text"
        data-sal="slide-left"
        data-sal-delay="800"
        data-sal-duration="1000">{{ item.text_two }}</p>
    </div>
  </section>
</template>

<script>
import fr from '../assets/datas/fr.json'
import en from '../assets/datas/en.json'
import sal from 'sal.js' 

export default {
  layout: 'inside',
  head: {
    title: 'A propos'
  },
  data () {
    return {
      langs: { en: en , fr: fr },
      languageActive: 'en',
    }
  },
  mounted () {
    // this.$nuxt.$loading.finish()
    sal({
      threshold: 0,
    });
  }
}
</script>

<style>
@import "~/node_modules/sal.js/dist/sal.css";
</style>
