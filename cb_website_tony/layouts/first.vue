<template>
    <div>
        <div id="select-language-row">
          <b-dropdown v-model="selectLanguage" aria-role="list">
            <button class="button" type="button" slot="trigger">
                <template v-if="selectLanguage == 'FR'">
                    <img class="select-language-bubble" width='30px' height='30px' src="~/assets/img/icons8-sms-50.png"/>
                    <span>FR</span>
                </template>
                <template v-if="selectLanguage == 'EN'">
                    <img class="select-language-bubble" width='30px' height='30px' src="~/assets/img/icons8-sms-50.png"/>
                    <span>EN</span>
                </template>
                <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item :value="'FR'" aria-role="listitem">
                <div class="media">
                    <b-icon class="media-left" icon="earth"></b-icon>
                    <div class="media-content">
                        <h3>Français</h3>
                    </div>
                </div>
            </b-dropdown-item>

            <b-dropdown-item :value="'EN'" aria-role="listitem">
                <div class="media">
                    <b-icon class="media-left" icon="account-multiple"></b-icon>
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
