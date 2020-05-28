<template>
  <section class="contact-container">
    <h1 class="section-titles">Contact</h1>
    <div class="contact-flex-container">
      
      <div class="contact-form-container">
        <b-field horizontal label="Subject" type="is-danger" message="Please enter a subject">
          <b-input name="subject" expanded></b-input>
        </b-field>

        <b-field horizontal label="From">
          <b-input name="name" placeholder="Name" expanded></b-input>
          <b-input name="email" type="email" placeholder="nobody@nowhere.com" expanded></b-input>
        </b-field>

        <b-field horizontal label="Message">
          <b-input type="textarea"></b-input>
        </b-field>

        <b-field horizontal>
          <p class="control">
            <button class="button is-primary">
              Send message
            </button>
          </p>
        </b-field>
      </div>

      <div class="contact-map-container">
        
      </div>

    </div>
  </section>
</template>

<script>
import sal from 'sal.js'

export default {
  layout: 'inside',
  head: {
    title: 'Contact'
  },
  mounted () {
    // this.$nuxt.$loading.finish()
    sal({
      threshold: 0,
    });
  }
}
</script>