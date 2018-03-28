<template>
  <div class="slack-invite">
    <form @submit.prevent="handleInvite">
       <label>
        Email:
        <input type="email" v-model="email"/>
      </label>
      <button type="submit">Submit</button>
      <div class="message" v-if="hasResponse" v-bind:class="[status ? 'invite-success' : '']">
        {{ message }}
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SlackInvite",

  data() {
      return {
      email: '',
      message: '', 
      status: '',
      hasResponse: ''
    } 
  },

  methods: {
    handleInvite() {
      axios.post(`https://8jecx91igd.execute-api.us-east-1.amazonaws.com/dev/invite`, {
        email: this.email
      })
      .then( response => {
        this.hasResponse = response.data
        this.status = response.data.ok

        switch (response.data.error) {
          case "already_invited":
            this.message = "This email has already been invited! Please check your inbox for the invitation - if you can't find it reach out to help@denverdevs.org."
            break;

          case "user_disabled":
            this.message = "The account associated with this email has been disabled. Please reach out to help@denverdevs.org."
            break;

          case "invalid_email":
            this.message = "That email is invalid. Please check it and try again."
            break; 

          case "bad_invite_domain":
            this.message = "That invite domain doesn't look right"
            break;

          default:
            this.message = "Success!"
            break;
        }
      })
      .catch( error => {
        console.error(error);
        this.message = "Uh oh, somethings wrong here (and it's on us) - reach out to help@denverdevs.org."
      });
    }
  }
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
