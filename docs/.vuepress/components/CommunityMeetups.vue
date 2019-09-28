<template>
  <div class="meetup-container">
    <div class="months" v-for="(month, key, index) in meetupsByMonth">
      <h4>{{key}}</h4>
      <div class="meetups">
        <div class="meetup community-meetup" v-for="meetup in month">
          <div class="meetup-time">🗓 {{formatTime(meetup.time)}}</div>
          <a :href="meetup.link" target="_blank">{{meetup.name}}</a>
          <div class="meetup-location">At: {{ meetup.venue ? meetup.venue.name : 'No Venue Set'}}</div>
          <div class="meetup-meta">Host: {{meetup.group.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import groupBy from "lodash.groupby";
import meetupsData from "../../../static-data/staticMeetups.json";

export default {
  name: "CommunityMeetups",
  data() {
    return {
      meetups: meetupsData
    };
  },
  computed: {
    meetupsByMonth() {
      const monthName = item => moment(item.time).format("MMMM");
      return groupBy(this.meetups.sort((a, b) => a.time - b.time), monthName);
    }
  },
  methods: {
    formatTime: function(str) {
      var date = moment(str);
      var dateComponent = date.format("MMM DD");
      var timeComponent = date.format("h:mm a");

      return `${dateComponent}, ${timeComponent}`;
    }
  }
};
</script>

<style scoped lang="scss">
@import "./styles/_global.scss";

.months {
  h4 {
    margin: 5px;
    padding: 5px 12px;
    display: inline-block;
    background: rgba(#3d88f3, 0.2);
    border-radius: 4px;
  }
}

.meetup-container {
  margin-top: 20px;
}

.meetups {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px 10px;
  margin-bottom: 20px;

  @media (min-width: 460px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.meetup {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  a {
    font-weight: bold;
    margin: 8px 0;
  }

  .meetup-time,
  .meetup-location {
    font-size: 12px;
    font-weight: bold;
    opacity: 0.6;
  }
  .meetup-meta {
    margin-top: 6px;
    font-size: 14px;
    opacity: 0.6;
  }
}
</style>
