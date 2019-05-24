<template>
  <div class="meetup-container">
    <div class="meetups">
      <div class="meetup conference" v-for="meetup in sortedByDate(conferences)" :key="meetup.id">
        <div
          class="meetup-time"
        >🗓{{formatTime(meetup.start.dateTime || meetup.start.date)}} - {{formatTime(meetup.end.dateTime || meetup.end.date)}}</div>
        <a :href="`${getURL(meetup.description)}`">{{meetup.summary}}</a>
      </div>
    </div>
    <div class="subscribe-tools">
      Add to Calendar:
      <a
        href="https://calendar.google.com/calendar/embed?src=denverdevs.org_iidscsg1g1em2n467m99d4tc1k%40group.calendar.google.com&ctz=America%2FDenver"
      >Google Cal</a> |
      <a
        href="https://calendar.google.com/calendar/ical/denverdevs.org_iidscsg1g1em2n467m99d4tc1k%40group.calendar.google.com/public/basic.ics"
      >ICS</a>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import conferenceData from "../../../static-data/staticConferences.json";
export default {
  name: "DenverConverences",
  data() {
    return {
      conferences: conferenceData
    };
  },
  methods: {
    sortedByDate: function(arr) {
      return arr.slice().sort(function(a, b) {
        return a.start.dateTime ||
          a.start.date < b.start.dateTime ||
          b.start.date
          ? -1
          : a.start.dateTime || a.start.date > b.start.dateTime || b.start.date
          ? 1
          : 0;
      });
    },
    formatTime: function(str) {
      var date = moment(str);
      var dateComponent = date.format("MMM, DD");

      return `${dateComponent}`;
    },
    getURL: function(str) {
      return str.match(/\bhttps?:\/\/\S+/gi);
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
.subscribe-tools {
  padding-left: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #777;
}
</style>
