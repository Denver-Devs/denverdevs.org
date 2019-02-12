<template>
  <div class="slack-invite" v-bind:class="[status ? 'invite-success' : '']">
    <form @submit.prevent="handleInvite">
      <label>
        <span>Email:</span>
        <input type="email" v-model="email" placeholder="Your Email Address" 
        @focus="heads_up = true"
        @blur="heads_up = false" />
      </label>
      <button type="submit" v-bind:class="[submitted ? 'submitted' : '']" :disabled="submitted == true">
        {{ buttonText }}
      </button>
      <transition name="notification-pop">
        <div class="message" v-if="hasResponse">
          {{ message }}
        </div>
      </transition>

      <transition name="notification-pop-fast">
        <div class="success-message" v-show="status">
          <svg class="check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z"/></svg> 
          <div>
            <span>Invite requested for {{email | trunc(14, '(...)') }}</span>
            Look for your invite soon. 
          </div>
          <svg class="close" @click="status = '', submitted = false, buttonText = 'Get your invite', email=''" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>
        </div>
      </transition>
    </form>


    <transition name="notification-pop-fast">
      <div class="invite-notice" v-show="heads_up">
        <h3>Heads up!</h3>
        <p>When you request an invite it requires a staff member to review and approve it - but we'll be available pretty often to handle that, but this is not an automated system and may take time.</p> 
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
      heads_up: "",
      submitted: "",
      buttonText: "Get your invite"
    };
  },

  filters: {
    trunc(text, length, suffix) {
      return text.length < 14 ? text : `${text.substring(0, length)}${suffix}`;
    }
  },

  methods: {
    handleInvite() {
      // If email is invalid, set invalid status.
      if (!this.validEmail(this.email)) {
        this.setInvalidEmailStatus();
        return;
      }

      // If email is valid, send invite request.
      this.submitted = true,
      this.buttonText = "Sending..."
      console.log("go!");
      setTimeout(() => {
        axios
          .post(
            `https://kapgbb2ttf.execute-api.us-east-1.amazonaws.com/dev/invite`,
            {
              email: this.email
            }
          )
          .then(response => {
            this.status = response.data.status;
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
      }, 1000);
    },
    validEmail(email) {
      if (!email) return false
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    setInvalidEmailStatus() {
      this.hasResponse = true;
      this.message = "Please enter a valid email.";
      this.status = "";
      setTimeout(() => {
        this.hasResponse = false;
      }, 4000);
    },
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
    min-width: 114px
  }

  &:hover {
    cursor: pointer;
  }

  & .submitted {

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

.success-message {
  position: absolute;
  background: #00c16c;
  color: #282c34;
  font-weight: 100;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  div {
    flex-basis: 80%;

    span {
      font-weight: bold;
      display: block
    }
  }

  .check {
    margin-right: 16px;
    path {
      fill: #282c34;
    }
  }

  .close {
    position: absolute;
    top: 0;
    right: 5px;
    width: 12px;
    opacity: 0.3;
    cursor: pointer;
  
    &:hover {
      opacity: 0.6
    }
  }
}

</style>
