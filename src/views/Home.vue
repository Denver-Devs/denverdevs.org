<template>
  <div class="home">

    <div class="masthead">
      <div class="masthead-inner">
        <h1>Bringing the Denver developer community together.</h1>
        <p>We're a community focused on helping each other find jobs, solve problems, make friends, and so much more.</p>

        <div class="masthead-invite-block">
          <div class="slack-invite">
            <h3>Join us on Slack</h3>
            <SlackInvite></SlackInvite>
            <p class="coc-notice">By joining, you agree to our Rules and Code of Conduct.</p>
          </div>
          <div class="forum-invite">
            <h3>Also, join our forum</h3>
            <p>Check out our forum, powered by Discourse, for a slower paced conversation & longer lasting job posting. Go there now.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="home-body">
      <div class="info-section">
        <h2>Who can join?</h2>
        <p>Anyone can join! We're open to folks of all experience levels, tech professions, age, gender - and even location if you're nice enough ;)</p>

        <h2>I'm not a developer - is that okay?</h2>
        <p>Absolutely! If you're in to design, UX, Project Management, any kind of coding, or are just curious and want to connect with tech-minded folks this is still the place for you. Get on in here!</p>
        
        <h2>What are the featured Slack Channels?</h2>
        <p>We have a ton. By default you're placed in #announcements, #general, #topic-gigs and a few others to get your feet wet. Our #help channels are pretty specific and phenomenal, as well -- they're like Stack Overflow except you know who DenverCoder9 is.</p>
      </div>
      <div class="info-section">
        <div id="discourse"></div>
        <h2>What's the Discourse for?</h2>
        <p>We have a lot of members, over 2000, and conversations move quick. To help preserve conversations and promote lengthier discussion we opened up a Discourse. It's still growing and we'd love any suggestions (or admins!) to help us out. There's also a pretty rad Minecraft server thread in there if breakin' blocks is your thing.</p>
        
        <h2>Where else can I find Denver Devs?</h2>
        <p>We're also on <a href="https://github.com/Denver-Devs">GitHub</a>, <a href="https://medium.com/denver-devs">Medium</a>, and coming soon to Twitter &amp; Reddit.</p>
        
        <h2>Who's running this show?</h2>
        <p>Denver Devs was started in 2015 by Dan Hannigan.</p>
        <p>The whole community has a strong say in how it runs - but helping with the admin tasks are Alan Proctor, Ashley Carter, Drew Dahlman, James Gibson, Kyle Coberly, Marc Missey, Michael McGuire, and Morgan Whaley. Feel free to reach out to any of us with help or questions.</p>
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
        <p>Denver Devs is dedicated to providing a harassment-free experience for everyone, regardless of gender identity or expression, sexual orientation, disability, physical appearance, body size, race, religion or nonreligion. We do not tolerate harassment of participants in any form. Harassment includes offensive comments &amp; communication related to gender, sexual orientation, disability, physical appearance, body size, race, religion, sexual images, deliberate intimidation, stalking, sustained disruption of discussions or other events, and unwelcome sexual attention. If a participant engages in behavior that violates this code of conduct, the organizers may take any action they deem appropriate, including warning the offender or expulsion from the group.</p>
        
        <h3 class="welcome">Welcome to colorful Denver Devs</h3>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SlackInvite from "@/components/SlackInvite.vue";


export default {
  name: 'home',
  components: {
    SlackInvite,
  },
};
</script>
