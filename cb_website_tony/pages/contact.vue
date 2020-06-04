<template>
  <section class="contact-container">
    <h1 class="section-titles">Contact</h1>
    <div class="contact-flex-container">
      
      <div class="contact-form-container">
        <h2 class="subtitle contact-titles has-text-weight-bold"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="800">Formulaire</h2>
        <b-field data-sal="slide-up"
          data-sal-delay="800"
          data-sal-duration="1000" label="Subject" label-position="on-border">
          <b-input user-scalable="no" 
                   name="subject" 
                   maxlength="50"
                   expanded
                   >
          </b-input>
        </b-field>

        <b-field data-sal="slide-up"
          data-sal-delay="800"
          data-sal-duration="1000" label="Name" label-position="on-border">
            <b-input value="" 
              maxlength="30"
              >
            </b-input>
        </b-field>

        <b-field data-sal="slide-up"
          data-sal-delay="800"
          data-sal-duration="1000" label="Email" label-position="on-border">
            <b-input type="email"
                maxlength="30"
                required>
            </b-input>
        </b-field>

        <b-field data-sal="slide-up"
          data-sal-delay="800"
          data-sal-duration="1000" label="Message" label-position="on-border">
          <b-input user-scalable="no" type="textarea" required></b-input>
        </b-field>

        <b-field data-sal="slide-up"
          data-sal-delay="800"
          data-sal-duration="1000">
          <p class="control">
            <button class="button is-primary">
              Send message
            </button>
          </p>
        </b-field>
      </div>

      <div class="contact-map-container">
        <h2 class="subtitle contact-titles has-text-weight-bold"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="800">Localisation</h2>
        <iframe data-sal="slide-up"
          data-sal-delay="800"
          data-sal-duration="1000" 
          class="contact-map" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22647.28890038643!2d-0.5660534772297189!3d44.803000105737894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5526f212045a41%3A0x40665174816ee80!2zQsOoZ2xlcw!5e0!3m2!1sfr!2sfr!4v1590676030979!5m2!1sfr!2sfr" width="600" height="850" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>

    </div>
  </section>
</template>

<script>
import fr from '../assets/datas/fr.json'
import en from '../assets/datas/en.json'
import sal from 'sal.js'
import { mapState } from 'vuex'

export default {
  layout: 'inside',
  head: {
    title: 'Contact | ST'
  },
  computed: mapState({
    activeLanguage: state => state.selectLanguage,
  }),
  mounted () {
    // this.$nuxt.$loading.finish()
    sal({
      threshold: 0,
    });
  }
}
</script>