  <template>
  <div class="channel-guide-container">
    <div class="guide-controls">
      <input type="search" class="search-input" placeholder="Search..." v-model="projectSearch">
      <div class="btn-container">
        <div class="btn action-button" v-on:click="sortByMembers">Order By Total Members</div>
        <div class="btn action-button" v-on:click="sortByName">Order By Name</div>
      </div>
    </div>

    <div class="channel-listing">
      <div
        class="channel"
        v-for="channel in channelList"
        v-if="!channel.is_archived"
        :key="channel.id"
      >
        <div class="channel-head">
          <h4 class="channel-name">
            <a
              :href="'https://denver-devs.slack.com/app_redirect?channel=' + channel.name"
              target="_blank"
            >{{channel.name_normalized}}</a>
          </h4>
          <div class="channel-members">Members: {{channel.num_members}}</div>
        </div>
        <div class="channel-info">
          <div class="channel-purpose" v-html="channel.purpose.value"></div>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import channelData from "../../../data/staticChannels.json";
export default {
  name: "ChannelGuide",
  data() {
    return {
      channels: channelData.channels,
      projectSearch: ""
    };
  },
  methods: {
    sortByMembers() {
      return this.channels.sort((a, b) => b.num_members - a.num_members);
    },

    sortByName() {
      return this.channels.sort((a, b) =>
        a.name_normalized.localeCompare(b.name_normalized)
      );
    }
  },
  computed: {
    channelList() {
      return this.channels.filter(result => {
        return (
          result.name_normalized
            .toLowerCase()
            .includes(this.projectSearch.toLowerCase()) ||
          result.purpose.value
            .toLowerCase()
            .includes(this.projectSearch.toLowerCase())
        );
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "./styles/_global.scss";

.channel-guide-container {
  margin-top: 70px;
}

.guide-controls {
  align-items: center;
  border-bottom: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding-bottom: 20px;

  @media screen and(min-width: 768px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
}

.search-input {
  background-size: 1rem;
  background-size: auto auto;
  background: #fff url(/assets/img/search.83621669.svg) 0.6rem 0.6rem no-repeat;
  border-radius: 2rem;
  border: 1px solid #cfd4db;
  color: #4e6e8e;
  cursor: text;
  display: inline-block;
  font-size: 16px;
  line-height: 2rem;
  outline: none;
  padding: 0 0.5rem 0 2rem;
  transition: all 0.2s ease;
  width: 20rem;

  @media screen and(min-width: 768px) {
    font-size: 0.9rem;
  }

  &:focus {
    border: 1px solid #1b87fb;
  }
}

.btn-container {
  display: none;

  @media screen and(min-width: 768px) {
    display: flex;
  }

  .btn {
    border-bottom: 2px solid transparent;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 4px;

    &:hover {
      border-bottom: 2px solid #1b87fb;
    }

    &:first-of-type {
      margin-right: 1.5rem;
    }
  }
}

.channel {
  margin-bottom: 10px;

  @media screen and(min-width: 768px) {
    margin-bottom: 30px;
  }
}
.channel-head {
  align-items: center;
  display: flex;
  justify-content: space-between;

  .channel-name {
    a {
      font-weight: bold;

      &:before {
        color: lighten(#1b87fb, 20%);
        content: "#";
        margin-right: 0px;
      }
    }
  }

  .channel-members {
    background: #efefef;
    border-radius: 12px;
    font-size: 14px;
    font-weight: bold;
    padding: 6px 12px;
  }
}

.channel-info {
  padding: 5px;
}
</style>
