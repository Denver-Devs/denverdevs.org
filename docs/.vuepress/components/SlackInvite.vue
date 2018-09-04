<template>
  <div class="slack-invite">
    <form @submit.prevent="handleInvite">
      <label>
        <span>Email:</span>
        <input type="email" v-model="email" placeholder="Your Email Address" 
        @focus="heads_up = true"
        @blur="heads_up = false" />
      </label>
      <button type="submit">Get Your Invite</button>
      <transition name="notification-pop">
        <div class="message" v-if="hasResponse" v-bind:class="[status ? 'invite-success' : '']">
          {{ message }}
        </div>
      </transition>
    </form>

    <transition name="notification-pop-fast">
      <div class="invite-notice" v-show="heads_up">
        <h3>Heads up!</h3>
        <p>When you request an invite it requires a staff member to send one to you - but we'll be available pretty often to handle that. You could also have a buddy invite you in if you want to get in much faster.</p> 
      </div>
    </transition>
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
      hasResponse: "",
      heads_up: ""
    };
  },

  methods: {
    handleInvite() {
      if (this.email && this.validEmail(this.email)) {
        console.log("go!");
        axios
          .post(
            `https://kapgbb2ttf.execute-api.us-east-1.amazonaws.com/dev/invite`,
            {
              email: this.email
            }
          )
          .then(response => {
            this.hasResponse = response.data;
            this.status = response.data.status;
            this.message ="Thanks, look for the invite in your inbox soon!";
            this.status = "invite-success";

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
        this.message = "Please enter a valid email.";
        this.status = "";
        setTimeout(() => {
          this.hasResponse = false;
        }, 4000);
      }
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>

<style scoped lang="scss">
@import './styles/_global.scss';

.slack-invite {
  max-width: 350px;
  position: relative;

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
  font-size: 16px;
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

.notification-pop-fast-enter-active {
  transition: all 0.144s ease;
}
.notification-pop-fast-leave-active {
  transition: all 0.144s ease;
}
.notification-pop-fast-enter,
.notification-pop-fast-leave-to {
  transform: scale(0.9);
  opacity: 0;
}

.invite-notice {
  background: white;
  color: #2c3e50;
  box-sizing: border-box;
  padding: 1em;
  border-radius: 5px;
  margin-top: 10px;
  // position: absolute;
  font-size: 14px;
  width: 100%;

  @media screen and (min-width: 768px) {
    position: absolute;
    max-width: 420px;
    margin-left: 40px;
    margin-top: 0;
    left: 100%;
    top: -135%;
  }

  &:before {
    position: absolute;
    content: '';
    top: 110px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;

    @media screen and (min-width: 768px) {
      left: -25px;
      top: 0;
      bottom: 0;
      transform: translateY(240%);
      margin: 0;
      border-top: 16px solid transparent;
      border-bottom: 16px solid transparent; 
      border-right: 16px solid white; 
    }
  }

  h3 {
    margin: 0 
  }
}

</style>
