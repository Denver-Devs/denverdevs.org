<template>
  <div class="home">
    <SlackInvite></SlackInvite>
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
