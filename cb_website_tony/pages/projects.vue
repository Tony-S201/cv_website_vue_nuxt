<template>
  <section class="projects-container">
    <h1 class="section-titles">Projects page</h1>

    <b-field class="projects-select">
        <b-select placeholder="Tous">
            <option value="tous" @click="isActive = 'tous'">Tous</option>
            <option value="desktop" @click="isActive = 'desktop'">Web</option>
            <option value="mobile" @click="isActive = 'mobile'">Mobile</option>
        </b-select>
    </b-field>

    <div class="tabs is-centered projects-tabs">
      <ul>
        <li @click="isActive = 'tous'" :class="{ 'is-active': isActive == 'tous' }">
          <a>
            <span class="icon is-small"><font-awesome-icon :icon="['fas', 'globe']" aria-hidden="true"></font-awesome-icon></span>
            <span>Tous</span>
          </a>
        </li>
        <li @click="isActive = 'web'" :class="{ 'is-active': isActive == 'web' }">
          <a>
            <span class="icon is-small"><font-awesome-icon :icon="['fas', 'desktop']" aria-hidden="true"></font-awesome-icon></span>
            <span>Web</span>
          </a>
        </li>
        <li @click="isActive = 'mobile'" :class="{ 'is-active': isActive == 'mobile' }">
          <a>
            <span class="icon is-small"><font-awesome-icon :icon="['fas', 'mobile-alt']" aria-hidden="true"></font-awesome-icon></span>
            <span>Mobile</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- TO DO : v-for liste de tous les projets, avec v-if sur catégorie choisie -->
    <div class="cards-container">
      <article class="project-card" v-for="item in en.projects" :key="item.id">
        <div class="project-card-container">
          <div class="project-card-image-container">
            <figure class="project-card-image">
              <img :src="require(`../assets/img/${item.image}`)" alt="Placeholder image">
            </figure>
          </div>
          <div class="project-card-content-container">
            <div class="project-card-informations">
              <p class="project-card-title">{{ item.title }}</p>
              <p class="project-card-function">{{ item.details.function }}</p>
            </div>
            <div class="project-card-content">
              <b-taglist>
                  <b-tag v-for="tag in item.technologies" type="is-info" :key="tag.id">{{ tag.name }}</b-tag>
              </b-taglist>
              <time class="project-card-date" datetime="2016-1-1">Avril 2019</time>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import fr from '../assets/datas/fr.json'
import en from '../assets/datas/en.json'

export default {
  layout: 'inside',
  head: {
    title: 'Projets'
  },
  data () {
    return {
      isActive: 'tous',
      en: en,
      fr: fr,
    }
  },
  mounted () {
    // this.$nuxt.$loading.finish()
  }
}
</script>