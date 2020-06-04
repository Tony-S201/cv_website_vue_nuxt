<template>
  <div class="inside-layout-container">
      <nav class="inside-nav">

        <aside class="inside-aside-menu">
          <div class="inside-aside-logo-container">
            <img class="inside-aside-logo" src="~/assets/img/cv_logo.png" />
          </div>
          <div class="inside-aside-menu-container">
            <ul class="inside-aside-menu-list has-text-centered">
              <nuxt-link to="/about" class="inside-aside-menu-list-items"><li>About</li></nuxt-link>
              <nuxt-link to="/skills" class="inside-aside-menu-list-items"><li>Skills</li></nuxt-link>
              <nuxt-link to="/projects" class="inside-aside-menu-list-items"><li>Projects</li></nuxt-link>
              <nuxt-link to="/contact" class="inside-aside-menu-list-items"><li>Contact</li></nuxt-link>
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
              <a href="#">Mentions Légales</a>
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
              <nuxt-link to="/about" class="inside-aside-menu-list-items has-text-black"><li class="has-text-centered">About</li></nuxt-link>
              <nuxt-link to="/skills" class="inside-aside-menu-list-items has-text-black"><li class="has-text-centered">Skills</li></nuxt-link>
              <nuxt-link to="/projects" class="inside-aside-menu-list-items has-text-black"><li class="has-text-centered">Projects</li></nuxt-link>
              <nuxt-link to="/contact" class="inside-aside-menu-list-items has-text-black"><li class="has-text-centered">Contact</li></nuxt-link>
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
export default {
  data () {
    return {
      activeLanguage: this.$store.state.selectLanguage,
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
