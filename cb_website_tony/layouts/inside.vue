<template>
  <div class="inside-layout-container">
      <nav class="inside-nav">

        <aside class="inside-aside-menu">
          <div class="inside-aside-logo-container">
            <img class="inside-aside-logo" src="~/assets/img/cv_logo.png" />
          </div>
          <div class="inside-aside-menu-container">
            <ul class="inside-aside-menu-list has-text-centered">
              <nuxt-link to="/about" class="inside-aside-menu-list-items"><li v-bind:class="{ 'inside-aside-menu-selected-blue': menuItemSelected == 1 }">{{ langs[activeLanguage].menu.title_about }}</li></nuxt-link>
              <nuxt-link to="/skills" class="inside-aside-menu-list-items"><li :class="{ 'inside-aside-menu-selected-green': menuItemSelected == 2 }">{{ langs[activeLanguage].menu.title_skills }}</li></nuxt-link>
              <nuxt-link to="/projects" class="inside-aside-menu-list-items"><li :class="{ 'inside-aside-menu-selected-blue': menuItemSelected == 3 }">{{ langs[activeLanguage].menu.title_projects }}</li></nuxt-link>
              <nuxt-link to="/contact" class="inside-aside-menu-list-items"><li :class="{ 'inside-aside-menu-selected-green': menuItemSelected == 4 }">{{ langs[activeLanguage].menu.title_contact }}</li></nuxt-link>
<!--               <nuxt-link to="/lab" class="inside-aside-menu-list-items"><li :class="{ 'inside-aside-menu-selected-blue': menuItemSelected == 5 }">{{ langs[activeLanguage].menu.title_lab }}</li></nuxt-link>
 -->
            </ul>
          </div>
          <footer class="inside-aside-footer-container">
            <div class="inside-aside-mentions-networks has-text-centered">
              <div class="inside-aside-mentions-download-container inside-aside-mentions-blog">
                <a href="https://blog.tonyswierz.com" target="_blank" class="inside-aside-mentions-download has-text-white has-text-weight-bold">Blog <font-awesome-icon :icon="['fab', 'wordpress']" aria-hidden="true"></font-awesome-icon></a>
              </div>
              <a href="https://github.com/Tony-S201" target="_blank"><img class="inside-aside-mentions-pictures" src="~/assets/img/icons8-github-48.png"/></a>
              <a href="https://www.linkedin.com/in/tonyswierz/" target="_blank"><img class="inside-aside-mentions-pictures" src="~/assets/img/icons8-linkedin-48.png"/></a>
              <a href="https://stackoverflow.com/users/12467251/tony-s?tab=profile" target="_blank"><img class="inside-aside-mentions-pictures" src="~/assets/img/icons8-stack-overflow-48.png"/></a>
              <div class="inside-aside-mentions-download-container">
                <a href="http://myreader.toile-libre.org/uploads/My_5f6609af770d0.pdf" target="_blank" class="inside-aside-mentions-download has-text-white has-text-weight-bold">{{ activeLanguage == 'fr' ? 'Voir mon CV' : 'See my CV' }}</a>
              </div>
            </div>
            <div class="inside-aside-mentions-container has-text-centered">
              <!-- <nuxt-link to="/legal-mentions"><span class="has-text-white">{{ activeLanguage == 'fr' ? 'Mentions Légales' : 'Legal Mentions' }}</span></nuxt-link> -->
              <div class="inside-aside-mentions-make has-text-white">MAKE WITH <img class="inside-aside-mentions-pictures-heart" src="~/assets/img/icons8-coeurs-48.png"/> BY</div>
              <img class="" src="~/assets/img/name.png"/>
            </div>
          </footer> 
        </aside>

        <div class="inside-menu">
        </div>

        <div class="inside-menu-burger">
          <input class="has-text-white" type="checkbox" v-model="checked"/>    
          <span></span>
          <span></span>
          <span></span>
          <ul class="inside-menu-burger-list">
            <div class="inside-menu-burger-list-container has-text-centered">
              <button @click="checked = false" class="inside-menu-burger-button"><nuxt-link to="/about" class="inside-aside-menu-list-items has-text-black has-text-weight-bold"><li :class="{ 'inside-aside-menu-selected': menuItemSelected == 1 }">{{ langs[activeLanguage].menu.title_about }}</li></nuxt-link></button>
              <button @click="checked = false" class="inside-menu-burger-button"><nuxt-link to="/skills" class="inside-aside-menu-list-items has-text-black has-text-weight-bold"><li :class="{ 'inside-aside-menu-selected': menuItemSelected == 2 }">{{ langs[activeLanguage].menu.title_skills }}</li></nuxt-link></button>
              <button @click="checked = false" class="inside-menu-burger-button"><nuxt-link to="/projects" class="inside-aside-menu-list-items has-text-black has-text-weight-bold"><li :class="{ 'inside-aside-menu-selected': menuItemSelected == 3 }">{{ langs[activeLanguage].menu.title_projects }}</li></nuxt-link></button>
              <button @click="checked = false" class="inside-menu-burger-button"><nuxt-link to="/contact" class="inside-aside-menu-list-items has-text-black has-text-weight-bold"><li :class="{ 'inside-aside-menu-selected': menuItemSelected == 4 }">{{ langs[activeLanguage].menu.title_contact }}</li></nuxt-link></button>
<!--               <nuxt-link to="/lab" class="inside-aside-menu-list-items has-text-black"><li :class="{ 'inside-aside-menu-selected-blue': menuItemSelected == 5 }">{{ langs[activeLanguage].menu.title_lab }}</li></nuxt-link>
 -->            </div>
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

      <div class="inside-timefortheplanet" @click="isCardModalActive = true">
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" class="Navbar-logo" alt="Time for the Planet Logo">
          <path d="M35.9166 23.9711C35.0411 25.1131 33.0826 25.9633 28.7361 26.0914C23.2884 26.2519 18.6936 23.8534 14.8956 21.869C14.9125 21.8735 14.9275 21.8761 14.9444 21.8807C6.61334 17.8214 0.539094 18.2244 0.412994 21.5498C0.352544 23.1443 0.515693 24.0855 1.18974 25.6884C3.85539 32.0259 10.4301 36.3068 17.9129 36.585C25.7948 36.8781 32.6907 32.2228 35.4278 25.4752C35.6729 24.8707 35.851 24.4313 35.979 24.1147C36.2332 23.4907 36.0681 23.7735 35.9166 23.9711Z" fill="#0096A2"></path>
          <path d="M10.2321 16.4863C19.7819 18.2244 24.8031 16.3582 26.6485 15.8577C26.6244 15.8636 26.601 15.8694 26.5744 15.8753C25.2555 16.1827 20.5586 17.0219 17.1162 15.8681C16.762 15.7492 16.4194 15.6114 16.097 15.4476C13.07 13.911 9.9805 11.3006 5.8231 10.0994C2.6004 9.16859 0.881802 10.9138 1.1834 12.1716C1.5513 13.7108 4.0499 15.3611 10.2321 16.4863Z" fill="#0096A2"></path>
          <path d="M26.6475 15.8578C26.7547 15.8318 26.8366 15.8103 26.8828 15.796C26.8139 15.8123 26.7294 15.8357 26.6475 15.8578Z" fill="#00A1AC"></path>
          <path d="M11.9458 8.78771C13.9628 8.97426 16.228 8.94241 18.0935 8.85336C18.1 8.85336 18.1065 8.85271 18.1137 8.85271C18.3139 8.84361 18.5225 8.83191 18.7312 8.82086C18.9093 8.81046 19.0835 8.80006 19.2512 8.78966C19.298 8.78641 19.3454 8.78381 19.3922 8.78056C19.6314 8.76496 19.8576 8.74871 20.0702 8.73246C20.2151 8.72141 20.3601 8.71036 20.507 8.69866C20.6207 8.68956 20.7273 8.68046 20.8294 8.67136C21.0406 8.65316 21.2272 8.63626 21.3832 8.62131C21.5132 8.60896 21.6146 8.59856 21.701 8.59011C21.8512 8.57451 21.9402 8.56476 21.9402 8.56476C20.1254 8.74676 18.5953 8.69086 16.7298 8.22546C16.1409 8.07856 15.5202 7.89266 14.8442 7.65801C12.5393 6.85721 10.8428 4.863 8.2909 4.4626C5.739 4.06155 5.15595 5.77235 5.8534 6.80001C6.55085 7.82701 7.5486 8.38081 11.9458 8.78771Z" fill="#0096A2"></path>
          <path d="M16.7305 7.44934C18.596 7.91474 20.1267 7.97064 21.9409 7.78864C21.9409 7.78864 21.8518 7.7984 21.7017 7.814C25.2734 7.46235 28.9583 6.83575 30.0093 6.07135C31.4276 5.04045 30.84 3.63579 28.8192 3.51099C26.7983 3.38619 23.6848 4.73495 21.7088 5.8172C20.6038 6.42235 18.9008 7.07884 16.7305 7.44934Z" fill="#89E5D3"></path>
          <path d="M24.5275 0.877203C23.3679 -0.438397 19.6694 1.3517 17.1071 1.7729C15.3892 2.05565 13.8272 1.46805 12.5194 1.0332C10.899 0.494353 10.3257 2.54705 12.4629 2.46645C14.2341 2.40015 16.4812 2.6257 18.6775 2.8935C22.5437 3.36475 25.6871 2.1928 24.5275 0.877203Z" fill="#89E5D3"></path>
          <path d="M17.1152 15.0933C20.5576 16.2471 25.2545 15.4079 26.5734 15.1005C27.1291 14.9536 27.679 14.7911 28.2172 14.6065C34.2791 12.5252 36.0289 10.362 34.4273 8.96121C32.424 7.20946 27.8168 10.908 24.2106 12.8547C21.998 14.0494 19.5774 14.7527 17.1152 15.0933Z" fill="#89E5D3"></path>
          <path d="M27.9517 17.1779C20.9077 18.4097 21.0383 22.6925 14.9452 21.1052C14.9283 21.1007 14.9134 21.0981 14.8965 21.0935C18.6938 23.078 23.2886 25.4765 28.7369 25.3159C33.8355 25.1658 35.6477 24.0224 36.2815 22.5794C36.468 22.1543 36.5571 21.7052 36.5915 21.2456C36.7664 18.931 33.7029 16.1724 27.9517 17.1779Z" fill="#89E5D3"></path>
        </svg>
      </div>

      <b-modal :active.sync="isCardModalActive" :width="640">
        <div class="card">
          <div class="card-image">
            <figure class="image is-5by3">
              <img src="~/assets/img/timefortheplanet.jpg" alt="Image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              Time for the Planet est une société à but non lucratif qui crée et finance des entreprises luttant à l’échelle mondiale contre le dérèglement climatique, n'importe qui peut y contribuer en achetant des actions.
              <br>
              Vous aussi, rejoignez l'aventure sur <a href="https://www.time-planet.com/" target="_blank">https://time-planet.com/</a>
            </div>
          </div>
        </div>
      </b-modal>

      <div class="inside-networks">
        <a href="https://github.com/Tony-S201" target="_blank"><img src="~/assets/img/icons8-github-48.png"/></a>
        <a href="https://www.linkedin.com/in/tonyswierz/" target="_blank"><img src="~/assets/img/icons8-linkedin-48.png"/></a>
        <a href="https://stackoverflow.com/users/12467251/tony-s?tab=profile" target="_blank"><img src="~/assets/img/icons8-stack-overflow-48.png"/></a>
        <a @click="isCardModalActive = true">
          <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" class="Navbar-logo" alt="Time for the Planet Logo">
            <path d="M35.9166 23.9711C35.0411 25.1131 33.0826 25.9633 28.7361 26.0914C23.2884 26.2519 18.6936 23.8534 14.8956 21.869C14.9125 21.8735 14.9275 21.8761 14.9444 21.8807C6.61334 17.8214 0.539094 18.2244 0.412994 21.5498C0.352544 23.1443 0.515693 24.0855 1.18974 25.6884C3.85539 32.0259 10.4301 36.3068 17.9129 36.585C25.7948 36.8781 32.6907 32.2228 35.4278 25.4752C35.6729 24.8707 35.851 24.4313 35.979 24.1147C36.2332 23.4907 36.0681 23.7735 35.9166 23.9711Z" fill="#0096A2"></path>
            <path d="M10.2321 16.4863C19.7819 18.2244 24.8031 16.3582 26.6485 15.8577C26.6244 15.8636 26.601 15.8694 26.5744 15.8753C25.2555 16.1827 20.5586 17.0219 17.1162 15.8681C16.762 15.7492 16.4194 15.6114 16.097 15.4476C13.07 13.911 9.9805 11.3006 5.8231 10.0994C2.6004 9.16859 0.881802 10.9138 1.1834 12.1716C1.5513 13.7108 4.0499 15.3611 10.2321 16.4863Z" fill="#0096A2"></path>
            <path d="M26.6475 15.8578C26.7547 15.8318 26.8366 15.8103 26.8828 15.796C26.8139 15.8123 26.7294 15.8357 26.6475 15.8578Z" fill="#00A1AC"></path>
            <path d="M11.9458 8.78771C13.9628 8.97426 16.228 8.94241 18.0935 8.85336C18.1 8.85336 18.1065 8.85271 18.1137 8.85271C18.3139 8.84361 18.5225 8.83191 18.7312 8.82086C18.9093 8.81046 19.0835 8.80006 19.2512 8.78966C19.298 8.78641 19.3454 8.78381 19.3922 8.78056C19.6314 8.76496 19.8576 8.74871 20.0702 8.73246C20.2151 8.72141 20.3601 8.71036 20.507 8.69866C20.6207 8.68956 20.7273 8.68046 20.8294 8.67136C21.0406 8.65316 21.2272 8.63626 21.3832 8.62131C21.5132 8.60896 21.6146 8.59856 21.701 8.59011C21.8512 8.57451 21.9402 8.56476 21.9402 8.56476C20.1254 8.74676 18.5953 8.69086 16.7298 8.22546C16.1409 8.07856 15.5202 7.89266 14.8442 7.65801C12.5393 6.85721 10.8428 4.863 8.2909 4.4626C5.739 4.06155 5.15595 5.77235 5.8534 6.80001C6.55085 7.82701 7.5486 8.38081 11.9458 8.78771Z" fill="#0096A2"></path>
            <path d="M16.7305 7.44934C18.596 7.91474 20.1267 7.97064 21.9409 7.78864C21.9409 7.78864 21.8518 7.7984 21.7017 7.814C25.2734 7.46235 28.9583 6.83575 30.0093 6.07135C31.4276 5.04045 30.84 3.63579 28.8192 3.51099C26.7983 3.38619 23.6848 4.73495 21.7088 5.8172C20.6038 6.42235 18.9008 7.07884 16.7305 7.44934Z" fill="#89E5D3"></path>
            <path d="M24.5275 0.877203C23.3679 -0.438397 19.6694 1.3517 17.1071 1.7729C15.3892 2.05565 13.8272 1.46805 12.5194 1.0332C10.899 0.494353 10.3257 2.54705 12.4629 2.46645C14.2341 2.40015 16.4812 2.6257 18.6775 2.8935C22.5437 3.36475 25.6871 2.1928 24.5275 0.877203Z" fill="#89E5D3"></path>
            <path d="M17.1152 15.0933C20.5576 16.2471 25.2545 15.4079 26.5734 15.1005C27.1291 14.9536 27.679 14.7911 28.2172 14.6065C34.2791 12.5252 36.0289 10.362 34.4273 8.96121C32.424 7.20946 27.8168 10.908 24.2106 12.8547C21.998 14.0494 19.5774 14.7527 17.1152 15.0933Z" fill="#89E5D3"></path>
            <path d="M27.9517 17.1779C20.9077 18.4097 21.0383 22.6925 14.9452 21.1052C14.9283 21.1007 14.9134 21.0981 14.8965 21.0935C18.6938 23.078 23.2886 25.4765 28.7369 25.3159C33.8355 25.1658 35.6477 24.0224 36.2815 22.5794C36.468 22.1543 36.5571 21.7052 36.5915 21.2456C36.7664 18.931 33.7029 16.1724 27.9517 17.1779Z" fill="#89E5D3"></path>
          </svg>
        </a>
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
      checked: false,
      isCardModalActive: false,
    }
  },
  computed: {
    selectLanguage() {
        this.activeLanguage = this.$store.state.selectLanguage
    },
    menuItemSelected() {
      if(this.$route.path == '/about'){ return 1 }
      if(this.$route.path == '/skills'){ return 2 }
      if(this.$route.path == '/projects'){ return 3 }
      if(this.$route.path == '/contact'){ return 4 }
    }
  },
  methods: {
    // Function to test custom loading
    goTo(location) {
      this.$nuxt.$loading.start()
      setTimeout(() => {
        this.$router.push('/' + location)
      }, 1000)
    },
  },
}
</script>
