<template>
  <section class="contact-container">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/">{{ langs[activeLanguage].menu.title_home }}</nuxt-link></li>
        <li class="is-active"><a href="#" aria-current="page">{{ langs[activeLanguage].menu.title_contact }}</a></li>
      </ul>
    </nav>
    <h1 class="section-titles">Contact</h1>
    <div class="contact-flex-container">
      
      <div class="contact-form-container">
        <h2 class="subtitles-group is-size-4 has-text-weight-bold has-text-centered"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="800">{{ langs[activeLanguage].contact.titles.form }}</h2>

        <form class="contact-form" @submit.prevent="sendEmail">
          <b-field data-sal="slide-up"
            data-sal-delay="800"
            data-sal-duration="1000" :label="langs[activeLanguage].contact.formdetails.subject" label-position="on-border">
            <b-input user-scalable="no" 
                    name="subject" 
                    maxlength="50"
                    v-model="form.subject"
                    expanded
                    >
            </b-input>
          </b-field>

          <b-field data-sal="slide-up"
            data-sal-delay="800"
            data-sal-duration="1000" :label="langs[activeLanguage].contact.formdetails.name" label-position="on-border">
              <b-input
                name="user_name"
                maxlength="30"
                v-model="form.name"
                >
              </b-input>
          </b-field>

          <b-field data-sal="slide-up"
            data-sal-delay="800"
            data-sal-duration="1000" :label="langs[activeLanguage].contact.formdetails.email" label-position="on-border">
              <b-input type="email"
                  name="user_email"
                  maxlength="100"
                  v-model="form.email"
                  required>
              </b-input>
          </b-field>

          <b-field data-sal="slide-up"
            data-sal-delay="800"
            data-sal-duration="1000" :label="langs[activeLanguage].contact.formdetails.message" label-position="on-border">
            <b-input name="message" user-scalable="no" v-model="form.message" type="textarea" maxlength="8000" required></b-input>
          </b-field>

          <b-field data-sal="slide-up"
            data-sal-delay="800"
            data-sal-duration="1000">
            <p class="control">
              <input type="submit" :value="langs[activeLanguage].contact.formdetails.send" class="button is-white">
            </p>
          </b-field>
          <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
        </form>
        <b-message v-if="form.isSend" type="is-success" has-icon>
          {{ langs[activeLanguage].contact.formdetails.success }}
        </b-message>
        <b-message v-if="form.isError" type="is-danger" has-icon>
          {{ langs[activeLanguage].contact.formdetails.error }}
        </b-message>
      </div>

      <div class="contact-map-container">
        <h2 class="subtitles-group is-size-4 has-text-weight-bold has-text-centered"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="800">{{ langs[activeLanguage].contact.titles.localisation }}</h2>
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
import emailjs from 'emailjs-com'
import { mapState } from 'vuex'

export default {
  layout: 'inside',
  head: {
    title: 'Contact | ST'
  },
  data () {
    return {
      isLoading: false,
      isFullPage: false,
      langs: { en: en , fr: fr },
      form: {
        name: "",
        subject: "",
        email: "",
        message: "",
        isSend: false,
        isError: false
      },
    }
  },
  computed: mapState({
    activeLanguage: state => state.selectLanguage,
  }),
  methods: {
    sendEmail: function(e) {
      this.isLoading = true
      emailjs.sendForm('gmail', 'template_apzEGNSR', e.target, 'user_Rr69M2J8TRMrN9QMAEuvQ')
        .then((result) => {
            // console.log('SUCCESS!', result.status, result.text);
            this.isLoading = false
            this.form.isSend = true
            setTimeout(function () {
              this.form.isSend = false;
            }.bind(this), 3000);
            this.form.name = ""
            this.form.subject = ""
            this.form.email = ""
            this.form.message = ""
        }, (error) => {
            // console.log('FAILED...', error);
            this.form.isError = true
            setTimeout(function () {
              this.form.isError = false;
            }.bind(this), 3000);
        });
    },
  },
  mounted () {
    sal({
      threshold: 0,
    });
  }
}
</script>