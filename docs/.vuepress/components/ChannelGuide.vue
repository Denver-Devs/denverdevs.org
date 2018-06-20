<template>
  <div class="channel-guide-container">
    <div class="guide-controls">
      <input type="search" class="search-input" placeholder="Search..." v-model="projectSearch" />
      <div class="btn-container">
        <div class="btn action-button" v-on:click="sortByMembers">Order By Total Members</div>
        <div class="btn action-button" v-on:click="sortByName">Order By Name</div>
      </div>

    </div>

    <div class="channel-listing">
      <div class="channel" v-for="channel in channelList" v-if="!channel.is_archived" :key="channel.id">
        <div class="channel-head">
          <h4 class="channel-name">
            <a :href="'https://slack.com/app_redirect?channel=' + channel.name" target="_blank">
              {{channel.name_normalized}}
            </a>
          </h4>
          <div class="channel-members">Members: {{channel.num_members}}</div>
        </div>
        <div class="channel-info">
          <div class="channel-purpose" v-html="channel.purpose.value"></div> <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ChannelGuide",
  data() {
    return {
      channels: [],
      projectSearch: ''
    };
  },
  mounted() {
    this.getChannels();
  },
  methods: {
    getChannels() {
      axios
        .get("https://fq3vjw2i1k.execute-api.us-east-1.amazonaws.com/dev/channels")
        .then((response) => {
          this.channels = response.data.channels;
        })
        .catch( error => {console.log(error)});
    },

    sortByMembers() {
      return this.channels.sort((a,b) => a.num_members - b.num_members).reverse();
    },

    sortByName() {
      return this.channels.sort((a, b) => a.name_normalized.localeCompare(b.name_normalized))
    },
    
  },
  computed: {
    channelList() {
      return this.channels.filter(result => {
        return result.name_normalized.includes(this.projectSearch.toLowerCase())
      })
    }
  }
};
</script>

<style scoped lang="scss">
@import './styles/_global.scss';

.channel-guide-container {
  margin-top: 70px
}

.guide-controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  border-bottom: 1px solid #efefef;
  padding-bottom: 20px
}

.search-input {
  cursor: text;
  width: 10rem;
  color: #4e6e8e;
  display: inline-block;
  border: 1px solid #cfd4db;
  border-radius: 2rem;
  font-size: .9rem;
  line-height: 2rem;
  padding: 0 .5rem 0 2rem;
  outline: none;
  transition: all .2s ease;
  background: #fff url(/assets/img/search.83621669.svg) .6rem .5rem no-repeat;
  background-size: auto auto;
  background-size: 1rem;
}

.btn-container {
  display: flex;

  .btn {
    font-weight: bold;
    font-size: 14px;
    border-bottom: 2px solid #1b87fb;
    margin: 0 12px;
    cursor: pointer;
  }
}

.channel {
  margin-bottom: 30px
}
.channel-head {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .channel-name {
    margin: 0 0 1.0em 0;
  

    a {
      font-weight: bold;

      &:before {
        content: '#';
        color: lighten(#1b87fb, 20%);
        margin-right: 0px
      }
    }
  }

  .channel-members {
    background: #efefef;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 12px
  }
}

.channel-info {
  padding: 5px;
}
</style>
