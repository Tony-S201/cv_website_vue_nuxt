<template>
  <section class="home-layout-container">

    <!-- <div class="home-select-language-row has-text-left">
      <b-dropdown v-model="selectLanguage" aria-role="list">
        <button class="button" type="button" slot="trigger">
            <template v-if="selectLanguage == 'FR'">
                <img class="home-select-language-bubble" width='30px' height='30px' src="~/assets/img/icons8-language-skill-50.png"/>
                <span>FR</span>
            </template>
            <template v-if="selectLanguage == 'EN'">
                <img class="home-select-language-bubble" width='30px' height='30px' src="~/assets/img/icons8-language-skill-50.png"/>
                <span>EN</span>
            </template>
            <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item :value="'FR'" aria-role="listitem">
            <div class="media">
                <img width='30px' height='30px' src="~/assets/img/icons8-france-48.png"/>
                <div class="media-content">
                    <h3>Français</h3>
                </div>
            </div>
        </b-dropdown-item>

        <b-dropdown-item :value="'EN'" aria-role="listitem">
            <div class="media">
                <img width='30px' height='30px' src="~/assets/img/icons8-great-britain-48.png"/>
                <img width='30px' height='30px' src="~/assets/img/icons8-usa-48.png"/>
                <div class="media-content">
                    <h3>English</h3>
                </div>
            </div>
        </b-dropdown-item>
      </b-dropdown>
    </div> -->

    <div class='home-title-one console-container'>
      <span id='text'></span>
      <div class='console-underscore' id='console'>&#95;</div>
    </div>

    <div class="home-goto-container has-text-centered">
      <b-button class="home-goto-button"><nuxt-link to="/about">Go !</nuxt-link></b-button>
      <div class="home-goto-icon">
        <font-awesome-icon :icon="['fas', 'hand-pointer']" aria-hidden="true"></font-awesome-icon>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  layout: 'first',
  head: {
    title: 'Tony Swierz | Développeur Web'
  },
  /* data () {
    return {
      selectLanguage: 'FR'
    }
  }, */
  mounted () {
    if (process.browser) {
      require('~/assets/js/title.js')
    }
  }
}
</script>

<!-- <head> TO DO -> intégrer façon nuxt
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta property="og:title" content="Tony Swierz, portfolio d'un Développeur Web" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.tonyswierz.com/" />
  <meta name="description" content="Tony Swierz, jeune développeur web de Bordeaux. Venez découvrir mon site portfolio." />
</head> -->
