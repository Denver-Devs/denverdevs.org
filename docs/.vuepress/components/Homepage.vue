<template>
  <div>
    <div class="masthead">
      <div class="masthead-inner">
        <h1>Bringing the Denver developer community together.</h1>
        <p>We're a community focused on helping each other find jobs, solve problems, make friends, and so much more.</p>
        <div class="masthead-invite-block">
          <div class="slack-invite">
            <h3>
              Join us on
              <a href="https://denver-devs.slack.com">Slack</a>
            </h3>
            <div style="background: white; border-radius: 4px; padding: 8px; margin: 10px 0; color: #2c3e50">
            <strong>We've temporarily disabled our invite form! It will be back soon.</strong> <p>Worry not though - if you'd still like an invite please let us know by sending an email to <a href="mailto:info@denverdevs.org" style="color: #2c3e50">info@denverdevs.org</a></p>
            </div>
            <p class="coc-notice">
              By joining, you agree to our
              <a href="/resources/rules/">Rules</a> and
              <a href="/resources/code-of-conduct/">Code of Conduct</a>.
            </p>
          </div>
        </div>
      </div>
      <a
        class="openc-button"
        href="https://opencollective.com/denverdevs/"
        target="_blank"
      >Support us on Open Collective</a>
    </div>

    <div class="home-body">
      <div class="info-section">
        <h2>Who can join?</h2>
        <p>Anyone can join! We're open to folks of all experience levels, tech professions, age, gender - and even location if you're nice enough ;)</p>

        <h2>I'm not a developer - is that okay?</h2>
        <p>Absolutely! If you're in to design, UX, Project Management, any kind of coding, or are just curious and want to connect with tech-minded folks this is still the place for you. Get on in here!</p>

        <h2>What are the featured Slack Channels?</h2>
        <p>
          We have a ton. By default you're placed in
          <a
            href="https://denver-devs.slack.com/app_redirect?channel=announcements"
          >#announcements</a>,
          <a href="https://denver-devs.slack.com/app_redirect?channel=tech-talk">#tech-talk</a>,
          <a href="https://denver-devs.slack.com/app_redirect?channel=dd-job-board">#dd-job-board</a> and a few others to get your feet wet. Our #help channels are pretty specific and phenomenal, as well -- they're like Stack Overflow except you know who DenverCoder9 is.
        </p>
      </div>
      <div class="info-section">
        <h2>Where else can I find Denver Devs?</h2>
        <p>
          We're also on
          <a href="https://github.com/Denver-Devs">GitHub</a> and
          <a href="https://medium.com/denver-devs">Medium</a>
        </p>

        <h2>Who's running this show?</h2>
        <p>Denver Devs was started in 2015 by Dan Hannigan.</p>
        <p>The whole community has a strong say in how it runs - but currently helping with the admin tasks are Chelsea Wells, Emilie Thoreson, Farman Pirzada, Kyle Coberly, Ricky Padilla and Valerie Krauncunas . Feel free to reach out to any of us with help or questions.</p>
      </div>
      <div class="info-section" id="rules-conduct">
        <h2>Rules &amp; Code of Conduct</h2>
        <p>These are very important to us. Please take a moment to consider them and abide by them when joining &amp; interacting with the community.</p>

        <h4>Rules</h4>
        <ul>
          <li>Be nice, kind, and respectful of others.</li>
          <li>Keep discussions in the right channel (and move them to the right one if they get out of hand)</li>
          <li>Do not insult, threaten, or provoke any member.</li>
          <li>Try to use a nice photo &amp; username. We want to see who you are and get to know you!</li>
          <li>Lastly: read over that Code of Conduct. Love it. Live it.</li>
        </ul>

        <h4>Code of Conduct</h4>
        <p>Denver Devs is dedicated to providing a harassment-free experience for everyone, regardless of gender identity or expression, sexual orientation, disability, physical appearance, body size, race, age, religion or nonreligion. We do not tolerate harassment of participants in any form. Harassment includes offensive comments &amp; communication related to age, gender, sexual orientation, disability, physical appearance, body size, race, religion, sexual images, deliberate intimidation, stalking, sustained disruption of discussions or other events, and unwelcome sexual attention. If a participant engages in behavior that violates this code of conduct, the organizers may take any action they deem appropriate, including warning the offender or expulsion from the group.</p>

        <h3 class="welcome">Welcome to colorful Denver Devs</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./styles/_global.scss";

.masthead {
  background: $nile-blue;
  box-sizing: border-box;
  color: $white;
  overflow: hidden;
  padding: 4em 1em 2em 1em;
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 10em 7.5em;
  }

  &:after {
    background-size: 30%;
    background: url('data:image/svg+xml;utf8,<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.8 367.1"><path fill="white" d="M91.4 4H2.6v359.3h83.9c5 0 10.3-.2 15.5-.7l5.7-.5v-65.4l-7 .9c-3.4.4-6.9.6-10.4.6H70.9V69h19.4c3.5 0 7 .2 10.4.6l7 .9V4.7l-5.9-.4c-3.6-.2-7-.3-10.4-.3zm-7.2 33.3l11.1-11.2v22.3L84.2 37.3zM58.4 302.1L44.7 315V52.7l13.7 12.9v236.5zm-43.3 40.7V24.9l17 16v285.9l-17 16zm9.4-326.2h62.6L72.8 31.1H40L24.5 16.6zm.3 334.2l14.6-13.7h33.9l13.6 13.7H24.8zm70.5-31.1v21.8l-10.6-10.7 10.6-11.1zm-9-8.8l-13.1 13.7H52.7l14.6-13.7h19zM66.9 56.5L53.2 43.6h19.6l12.8 12.9H66.9zM242.9 188.1l4.3-4.4-4.2-4.4c-7-7.3-14.6-17.8-14.6-21.8v-46.7c0-34.8-8.6-59.7-26.9-78.5-15.9-16.2-41.4-26.2-71.6-28.1l-6.6-.4v65l5.5.7c11.3 1.4 20 4.9 23.3 9.4 5.4 7.3 8.1 18 8.1 31.8v46.7c0 8.4 8.2 19.3 13.9 25.8-5.5 5.9-13.9 16.7-13.9 26.5v46.1c0 15.2-2.8 26.2-8.4 32.9-3.5 4.2-12.1 7.5-23 8.9l-5.5.7v65l6.8-.6c29.8-2.5 54.7-12.1 70-27.1 18.8-18.4 28.4-47.1 28.4-85.2 0-.3-.2-30.8 0-40.5 0-4.9 8.6-15.9 14.4-21.8zm-27-77.2v46.7c0 6.2 4.5 13.8 9.2 20h-11.8c-6-6.9-11.6-15.1-11.6-18.5 0-9.3-1.6-51.6-1.6-53.2 0-35.5-11.6-56.7-38.9-71l-15.3-16c19.7 3.6 35.9 11.3 46.8 22.3 16 16.4 23.2 37.9 23.2 69.7zm-67.7-71.3l-12.4 10.6V26.6l12.4 13zm24.5 117.9v-46.7c0-16.6-3.5-29.8-10.5-39.3-4.4-5.9-11.6-9.4-18.6-11.6l14.6-12.4c21 12 29.3 28.7 29.3 58.5 0 .4 1.6 43.9 1.6 53 0 5.7 3.8 12.6 8.1 18.5h-11.4c-6.6-7-13.1-16.2-13.1-20zm-11.3 139.4c7.6-9.1 11.3-22.5 11.3-40.9v-46.1c0-5.3 6.6-14 12.3-19.7h14.1c-4.8 6.2-9.8 14.3-10 21.1-.2 9.7-1.6 46.7-1.6 47.3 0 33.9-9.1 47.2-29.3 61.1l-14.9-12.2c6.7-2.1 13.6-5.3 18.1-10.6zm-13.3 30.7l-12.3 13.3v-23.4l12.3 10.1zm67.8-77.1c0 34.5-8.3 60.2-24.6 76.2-10.2 10-25.8 17.2-44.7 21.1l14.6-15.6.3.5c28.8-18.9 38.6-37.6 38.6-73.8.1-1.5 1.4-37.5 1.6-47.3.1-4.9 8.2-15.4 14-21.4h9.1c-4.4 6-8.7 13.3-8.9 19.6-.2 9.7 0 39.5 0 40.7z"/></svg>')
      no-repeat 0 0;
    content: "";
    height: 200%;
    left: auto;
    opacity: 0.05;
    position: absolute;
    right: -120%;
    top: 40%;
    transform: rotate(30deg);
    width: 200%;
    z-index: 0;
  }
}
.masthead-inner {
  position: relative;
  z-index: 5;

  h1 {
    font-size: 1.4rem;
  }

  a {
    border-bottom: 3px solid $venice-blue;
    color: $white;
    text-decoration: none;
  }
}
.masthead-invite-block {
  display: flex;
  flex-direction: column;
  max-width: 768px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 4em;
  }

  @media screen and (min-width: 1440px) {
    max-width: 940px;
  }

  h3 {
    a {
      border-bottom: 3px solid $gold;
      color: $white;
      text-decoration: none;
    }
  }

  .coc-notice {
    font-size: 0.65em;
    opacity: 0.6;
  }
}

.home-body {
  background: $white;
}

.info-section {
  box-sizing: border-box;
  max-width: 860px;
  padding: 1em;

  &:nth-of-type(1) {
    border-left: 1em solid $gold;
    @media screen and (min-width: 768px) {
      border-left: 3em solid $gold;
    }
  }

  &:nth-of-type(2) {
    border-left: 1em solid $maroon;
    @media screen and (min-width: 768px) {
      border-left: 3em solid $maroon;
    }
  }

  &:nth-of-type(3) {
    border-left: 1em solid $venice-blue;
    @media screen and (min-width: 768px) {
      border-left: 3em solid $venice-blue;
    }
  }

  @media screen and (min-width: 768px) {
    border-left: 10px;
    padding: 1em 5em;
  }

  a {
    border-bottom: 0.1em solid #2d4f75;
    color: #2d4f75;
    text-decoration: none;
  }
}

.openc-button {
  display: inline-block;
  text-decoration: none;
  background: #2d4f75;
  padding: 8px 12px;
  bottom: 20px;
  color: white;
  z-index: 100;
  @media (min-width: 768px) {
    position: absolute;
  }
}
</style>
