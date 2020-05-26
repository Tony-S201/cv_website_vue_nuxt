<template>
  <section class="projects-container">
    <h1 class="section-titles">Projects</h1>

    <b-field class="projects-select">
        <b-select placeholder="Tous">
            <option value="tous" @click="isActive = 'tous'">Tous</option>
            <option value="desktop" @click="isActive = 'web'">Web</option>
            <option value="mobile" @click="isActive = 'mobile'">Mobile</option>
        </b-select>
    </b-field>

    <div class="tabs is-centered projects-tabs" 
      data-sal="flip-up"
      data-sal-delay="200"
      data-sal-duration="1000"
      data-sal-easing="ease-out-bounce">
      <ul>
        <li @click="changeProjectsType('tous')" :class="{ 'is-active': isActive == 'tous' }">
          <a>
            <span class="icon is-small"><font-awesome-icon :icon="['fas', 'globe']" aria-hidden="true"></font-awesome-icon></span>
            <span>Tous</span>
          </a>
        </li>
        <li @click="changeProjectsType('web')" :class="{ 'is-active': isActive == 'web' }">
          <a>
            <span class="icon is-small"><font-awesome-icon :icon="['fas', 'desktop']" aria-hidden="true"></font-awesome-icon></span>
            <span>Web</span>
          </a>
        </li>
        <li @click="changeProjectsType('mobile')" :class="{ 'is-active': isActive == 'mobile' }">
          <a>
            <span class="icon is-small"><font-awesome-icon :icon="['fas', 'mobile-alt']" aria-hidden="true"></font-awesome-icon></span>
            <span>Mobile</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="project-cards" data-sal="slide-left"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce">

      <article class="project-card" 
        v-for="item in projectsDatas" 
        :key="item.id"
        >

        <div class="project-card-container" @click="isCardModalActive = true, currentItem = item">

          <div class="project-card-section-image">
            <figure class="project-card-image-figure image is-2by1">
              <img class="project-card-image-img" :src="require(`../assets/img/${item.image}`)" alt="Placeholder image">
            </figure>
          </div>
          
          <div class="project-card-section-informations">
            <p class="project-card-informations-title has-text-weight-bold">{{ item.title }}</p>
            <p class="project-card-informations-function is-italic">{{ item.details.function }}</p>
          </div>

          <div class="project-card-content">
            <b-taglist class="project-card-content-technologies">
                <b-tag v-for="tag in item.technologies" type="is-info" :key="tag.id">{{ tag.name }}</b-tag>
            </b-taglist>
            <time class="project-card-content-date" datetime="2016-1-1"><small>{{ item.details.date }}</small></time>
          </div>

        </div>

      </article>

        <b-modal v-if="currentItem !== undefined" :active.sync="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="card-image">
                  <b-carousel
                    :has-drag="drag"
                    :progress="progress"
                    :progress-type="progressType">
                      <b-carousel-item v-for="(picture, i) in currentItem.carousel" :key="i">
                          <section class="hero is-medium">
                            <figure class="image is-2by1">
                              <img :src="require(`../assets/img/${picture.img}`)" alt="Image">
                            </figure>
                          </section>
                      </b-carousel-item>
                  </b-carousel>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img :src="require(`../assets/img/${currentItem.logo}`)" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{ currentItem.title }}</p>
                            <p class="subtitle is-6 is-italic">{{ currentItem.details.function }}</p>
                        </div>
                    </div>

                    <div class="content">
                        <p>{{ currentItem.details.description }}</p>
                        <b-taglist class="project-card-content-technologies">
                          <span class="has-text-weight-bold">Technologies : </span>
                          <div class="projects-modal-taglist">
                            <b-tag v-for="tag in currentItem.technologies" type="is-info" :key="tag.id">{{ tag.name }}</b-tag>
                          </div>
                        </b-taglist>
                        <p>
                          <span class="has-text-weight-bold">Team : </span>
                          <span class="projects-modal-team">{{ currentItem.details.team }}</span>
                        </p>
                        <div class="projects-modal-row-datelink">
                          <small>{{ currentItem.details.date }}</small>
                          <small>Lien</small>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>

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
    title: 'Projets'
  },
  data () {
    return {
      isActive: 'tous',
      langs: { en: en, fr: fr },
      activeLanguage: 'en',
      isCardModalActive: false,
      currentItem: undefined,
      projectsDatas : undefined,
      progress: true,
      progressType: 'is-info',
      drag: true,
    }
  },
  methods: {
    changeProjectsType(type) {
      this.isActive = type

      // Filter pour object via reducer
      Object.filter = (obj, predicate) => 
        Object.keys(obj)
            .filter( key => predicate(obj[key]) )
            .reduce( (res, key) => (res[key] = obj[key], res), {} );

      // Si 'tous' n'est pas sélectionné
      if (this.isActive !== 'tous') {
      // Je filtre mon objet pour ressortir les projets du type sélectionné
        this.projectsDatas = Object.filter(this.langs[this.activeLanguage].projects, item => item.type == this.isActive)
      } else {
      // Sinon je récupère tous les projets
        this.projectsDatas = this.langs[this.activeLanguage].projects
      }
    }
  },
  mounted () {
    // Récupère tous les projets selon la langue sélectionnée
    this.projectsDatas = this.langs[this.activeLanguage].projects

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