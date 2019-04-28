<template>
  <div class="meetup-container">
    <div class="meetups">
      <div class="meetup community-meetup" v-for="meetup in sortedByDate(meetups)" :key="meetup.id">
        <div class="meetup-time">🗓 {{formatTime(meetup.start.dateTime)}}</div>
        <h4>{{meetup.summary}}</h4>
        <div class="meetup-location">{{meetup.location}}</div>
        <!-- <p>{{getOrganizer(meetup.organizer.displayName)}}</p> -->
      </div>
    </div>
    <div class="subscribe-tools">
      Add to Calendar:
      <a
        href="https://calendar.google.com/calendar/embed?src=denverdevs.org_g5u6nvggnne51qre64lsnm0al4%40group.calendar.google.com&ctz=America%2FDenver"
      >Google Cal</a> |
      <a
        href="https://calendar.google.com/calendar/ical/denverdevs.org_g5u6nvggnne51qre64lsnm0al4%40group.calendar.google.com/public/basic.ics"
      >ICS</a>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import ddMeetupsData from "../../../static-data/staticDDMeetups.json";

export default {
  name: "DenverDevsMeetups",
  data() {
    return {
      meetups: ddMeetupsData
    };
  },
  methods: {
    sortedByDate: function(arr) {
      return arr.slice().sort(function(a, b) {
        return a.start.dateTime < b.start.dateTime
          ? -1
          : a.start.dateTime > b.start.dateTime
          ? 1
          : 0;
      });
    },
    formatTime: function(str) {
      var date = moment(str);
      var dateComponent = date.format("MMM DD");
      var timeComponent = date.format("h:mm a");

      return `${dateComponent}, ${timeComponent}`;
    },
    getURL: function(str) {
      return str.match(/\bhttps?:\/\/\S+/gi);
    },
    getOrganizer: function(str) {
      return str.replace(/Events - /g, "");
    }
  }
};
</script>

<style scoped lang="scss">
@import "./styles/_global.scss";

.meetups {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px 10px;
  margin: 20px 0 10px 0;

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

  a,
  h4 {
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
.subscribe-tools {
  padding-left: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #777;
}
</style>
