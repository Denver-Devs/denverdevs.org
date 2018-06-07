<template>
  <div class="slack-invite">
    <form @submit.prevent="handleInvite">
      <label>
        <span>Email:</span>
        <input type="email" v-model="email" placeholder="Your Email Address" />
      </label>
      <button type="submit">Get Your Invite</button>
      <transition name="notification-pop">
        <div class="message" v-if="hasResponse" v-bind:class="[status ? 'invite-success' : '']">
          {{ message }}
        </div>
      </transition>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SlackInvite",

  data() {
    return {
      email: "",
      message: "",
      status: "",
      hasResponse: ""
    };
  },

  methods: {
    handleInvite() {
      if (this.email) {
        console.log("go!");
        axios
          .post(
            `https://8jecx91igd.execute-api.us-east-1.amazonaws.com/dev/invite`,
            {
              email: this.email
            }
          )
          .then(response => {
            this.hasResponse = response.data;
            this.status = response.data.ok;

            switch (response.data.error) {
              case "already_invited":
                this.message =
                  "This email has already been invited! Please check your inbox for the invitation - if you can't find it reach out to help@denverdevs.org.";
                break;

              case "user_disabled":
                this.message =
                  "The account associated with this email has been disabled. Please reach out to help@denverdevs.org.";
                break;

              case "invalid_email":
                this.message =
                  "That email is invalid. Please check it and try again.";
                break;

              case "bad_invite_domain":
                this.message = "That invite domain doesn't look right";
                break;

              default:
                this.message =
                  "Success! Look for the invite in your inbox soon.";
                break;
            }

            setTimeout(() => {
              this.hasResponse = false;
            }, 4000);
          })
          .catch(error => {
            console.error(error);
            this.message =
              "Uh oh, somethings wrong here (and it's on us) - reach out to help@denverdevs.org.";
          });
      } else {
        this.hasResponse = true;
        this.message = "Please enter your email";
        setTimeout(() => {
          this.hasResponse = false;
        }, 4000);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import './styles/_global.scss';

.slack-invite {
  max-width: 350px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 440px;
  }
}

form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}

label span {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

input {
  width: 100%;
  box-sizing: border-box;
  display: block;
  font-size: 1rem;
  border: none;
  padding: 1rem;
  border-radius: 0px;
  box-shadow: none;
}

button {
  background: gold;
  font-family: $OpenSans;
  font-weight: 700;
  text-align: center;
  border: 0px;
  padding: 1rem;
  color: $nile-blue;

  @media screen and (min-width: 1024px) {
    display: inline-block;
  }

  &:hover {
    cursor: pointer;
  }
}

.message {
  background: $maroon;
  color: $white;
  padding: 1em;
  transform: scale(1);
  margin-top: 0.4em;
  border-left: 3px solid lighten($maroon, 5%);
  opacity: 1;

  @media screen and(min-width: 768px) {
    position: absolute;
    z-index: 4;
    top: 100%;
  }

  &.invite-success {
    background: $venice-blue;
    color: $white;
    border-left: 3px solid lighten($venice-blue, 5%);
  }
}
.notification-pop-enter-active {
  transition: all 0.3s ease;
}
.notification-pop-leave-active {
  transition: all 0.3s ease;
}
.notification-pop-enter,
.notification-pop-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
</style>
