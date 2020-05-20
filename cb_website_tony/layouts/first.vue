<template>
    <div id="first-layout-container">
        <div id="first-select-language-row has-text-left">
          <b-dropdown v-model="selectLanguage" aria-role="list">
            <button class="button" type="button" slot="trigger">
                <template v-if="selectLanguage == 'FR'">
                    <img class="first-select-language-bubble" width='30px' height='30px' src="~/assets/img/icons8-language-skill-50.png"/>
                    <span>FR</span>
                </template>
                <template v-if="selectLanguage == 'EN'">
                    <img class="first-select-language-bubble" width='30px' height='30px' src="~/assets/img/icons8-language-skill-50.png"/>
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
        </div>

        <Nuxt/>
    </div>
</template>

<script>
export default {
  data () {
    return {
      selectLanguage: 'FR'
    }
  }
}
</script>
