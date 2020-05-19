<template>
  <section class="projects-container">
    <h1 class="section-titles">Projects page</h1>

    <b-field class="projects-select">
        <b-select placeholder="Tous">
            <option value="tous" @click="isActive = 'tous'">Tous</option>
            <option value="desktop" @click="isActive = 'web'">Web</option>
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
    <div class="project-cards">

      <article class="project-card" v-for="item in en.projects" :key="item.id">

        <div class="project-card-container" @click="isCardModalActive = true">

          <div class="project-card-section-image">
            <figure class="project-card-image-figure">
              <img class="project-card-image-img" :src="require(`../assets/img/${item.image}`)" alt="Placeholder image">
            </figure>
          </div>
          
          <div class="project-card-section-informations">
            <p class="project-card-informations-title">{{ item.title }}</p>
            <p class="project-card-informations-function">{{ item.details.function }}</p>
          </div>

          <div class="project-card-content">
            <b-taglist class="project-card-content-technologies">
                <b-tag v-for="tag in item.technologies" type="is-info" :key="tag.id">{{ tag.name }}</b-tag>
            </b-taglist>
            <time class="project-card-content-date" datetime="2016-1-1">{{ item.details.date }}</time>
          </div>

        </div>

        <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="/static/img/placeholder-1280x960.png" alt="Image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="/static/img/placeholder-1280x960.png" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">John Smith</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>

                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a>#css</a> <a>#responsive</a>
                        <br>
                        <small>11:09 PM - 1 Jan 2016</small>
                    </div>
                </div>
            </div>
        </b-modal>
        
      </article>

    </div>

    <!-- Bulma Card -->

    

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
      isCardModalActive: false
    }
  },
  mounted () {
    // this.$nuxt.$loading.finish()
  }
}
</script>