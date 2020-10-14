<template>
	<div>
		<div class="first-dropdown-container">
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
		<div>
			<Nuxt/>
		</div>
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
    }
  },
  computed: {
    selectLanguage() {
        this.activeLanguage = this.$store.state.selectLanguage
    },
  },
}
</script>
