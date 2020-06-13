<template>
  <div class="inside-layout-container">
      <nav class="inside-nav">

        <aside class="inside-aside-menu">
          <div class="inside-aside-logo-container">
            <img class="inside-aside-logo" src="~/assets/img/cv_logo.png" />
          </div>
          <div class="inside-aside-menu-container">
            <ul class="inside-aside-menu-list has-text-centered">
              <nuxt-link to="/about" @click.native="menuItemSelected = 1" class="inside-aside-menu-list-items"><li v-bind:class="{ 'inside-aside-menu-selected-blue': menuItemSelected == 1 }">{{ langs[activeLanguage].menu.title_about }}</li></nuxt-link>
              <nuxt-link to="/skills" @click.native="menuItemSelected = 2" class="inside-aside-menu-list-items"><li :class="{ 'inside-aside-menu-selected-green': menuItemSelected == 2 }">{{ langs[activeLanguage].menu.title_skills }}</li></nuxt-link>
              <nuxt-link to="/projects" @click.native="menuItemSelected = 3" class="inside-aside-menu-list-items"><li :class="{ 'inside-aside-menu-selected-blue': menuItemSelected == 3 }">{{ langs[activeLanguage].menu.title_projects }}</li></nuxt-link>
              <nuxt-link to="/contact" @click.native="menuItemSelected = 4" class="inside-aside-menu-list-items"><li :class="{ 'inside-aside-menu-selected-green': menuItemSelected == 4 }">{{ langs[activeLanguage].menu.title_contact }}</li></nuxt-link>
              <nuxt-link to="/lab" @click.native="menuItemSelected = 5" class="inside-aside-menu-list-items"><li :class="{ 'inside-aside-menu-selected-blue': menuItemSelected == 5 }">{{ langs[activeLanguage].menu.title_lab }}</li></nuxt-link>
            </ul>
          </div>
          <footer class="inside-aside-footer-container">
            <div class="inside-aside-mentions-networks has-text-centered">
              <span class="inside-aside-mentions-networks-title">MES PROFILS :</span>
              <a href="https://github.com/Tony-S201" target="_blank"><img class="inside-aside-mentions-pictures" src="~/assets/img/icons8-github-48.png"/></a>
              <a href="https://www.linkedin.com/in/tonyswierz/" target="_blank"><img class="inside-aside-mentions-pictures" src="~/assets/img/icons8-linkedin-48.png"/></a>
              <a href="https://stackoverflow.com/users/12467251/tony-s?tab=profile" target="_blank"><img class="inside-aside-mentions-pictures" src="~/assets/img/icons8-stack-overflow-48.png"/></a>
            </div>
            <div class="inside-aside-mentions-container has-text-centered">
              <nuxt-link to="/legal-mentions" @click.native="menuItemSelected = 6"><span class="has-text-white">Mentions Légales</span></nuxt-link>
              <p>Copyright Swierz Tony 2020</p>
            </div> 
          </footer> 
        </aside>

        <div class="inside-menu">
        </div>

        <div class="inside-menu-burger">
          <input type="checkbox" v-model="checked"/>    
          <span></span>
          <span></span>
          <span></span>
          <ul class="inside-menu-burger-list">
            <div class="inside-menu-burger-list-container">
              <nuxt-link to="/about" v-on:@click.native="menuItemSelected = 1" class="inside-aside-menu-list-items has-text-black"><li v-bind:class="{ 'inside-aside-menu-selected': menuItemSelected == 1 }">About</li></nuxt-link>
              <nuxt-link to="/skills" v-on:@click.native="menuItemSelected = 2" class="inside-aside-menu-list-items has-text-black"><li :class="{ 'inside-aside-menu-selected': menuItemSelected == 2 }">Skills</li></nuxt-link>
              <nuxt-link to="/projects" v-on:@click.native="menuItemSelected = 3" class="inside-aside-menu-list-items has-text-black"><li :class="{ 'inside-aside-menu-selected': menuItemSelected == 3 }">Projects</li></nuxt-link>
              <nuxt-link to="/contact" v-on:@click.native="menuItemSelected = 4" class="inside-aside-menu-list-items has-text-black"><li :class="{ 'inside-aside-menu-selected': menuItemSelected == 4 }">Contact</li></nuxt-link>
            </div>
          </ul>
        </div>

        <div class="inside-select-language">
          <b-dropdown v-model="activeLanguage" position="is-bottom-left" aria-role="list">
            <button class="button" type="button" slot="trigger">
                <template v-if="activeLanguage == 'fr'">
                    <img class="inside-select-language-bubble" width='30px' height='30px' src="~/assets/img/icons8-language-skill-50.png"/>
                    <span>FR</span>
                </template>
                <template v-if="activeLanguage == 'en'">
                    <img class="inside-select-language-bubble" width='30px' height='30px' src="~/assets/img/icons8-language-skill-50.png"/>
                    <span>EN</span>
                </template>
                <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item :value="'fr'" @click="$store.dispatch('switchToFr')" aria-role="listitem">
                <div class="media">
                    <img width='30px' height='30px' src="~/assets/img/icons8-france-48.png"/>
                    <div class="media-content">
                        <h3>Français</h3>
                    </div>
                </div>
            </b-dropdown-item>

            <b-dropdown-item :value="'en'" @click="$store.dispatch('switchToEn')" aria-role="listitem">
                <div class="media">
                    <img width='30px' height='30px' src="~/assets/img/icons8-great-britain-48.png"/>
                    <img width='30px' height='30px' src="~/assets/img/icons8-usa-48.png"/>
                    <div class="media-content">
                        <h3>English</h3>
                    </div>
                </div>
            </b-dropdown-item>
          </b-dropdown>
        </div>

        <div class="inside-tablet-block">
        </div>

      </nav>

      <div class="inside-networks">
        <a href="https://github.com/Tony-S201" target="_blank"><img src="~/assets/img/icons8-github-48.png"/></a>
        <a href="https://www.linkedin.com/in/tonyswierz/" target="_blank"><img src="~/assets/img/icons8-linkedin-48.png"/></a>
        <a href="https://stackoverflow.com/users/12467251/tony-s?tab=profile" target="_blank"><img src="~/assets/img/icons8-stack-overflow-48.png"/></a>
      </div>

      <main>
        <Nuxt/>
      </main>

  </div>
</template>

<script>
import fr from '../assets/datas/fr.json'
import en from '../assets/datas/en.json'

export default {
  data () {
    return {
      activeLanguage: this.$store.state.selectLanguage,
      langs: { en: en, fr: fr },
      menuItemSelected: undefined,
      checked: false,
    }
  },
  computed: {
    selectLanguage() {
        this.activeLanguage = this.$store.state.selectLanguage
    }
  },
  methods: {
    // Function to test custom loading
    goTo(location) {
      this.checked = false
      this.$nuxt.$loading.start()
      setTimeout(() => {
        this.$router.push('/' + location)
      }, 1000)
    }
  },
}
</script>
