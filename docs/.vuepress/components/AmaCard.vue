<template>
  <a class="ama-card" :href="link">
    <div class="image-container">
      <img :src="image" />
    </div>
    <div class="body">
      <h4>
        Guest:
        <b>{{guest}}</b>
      </h4>
      <div>{{date}} at {{time}}</div>Join us in the #ama channel!
    </div>
  </a>
</template>

<script>
export default {
  name: "AmaCard",
  props: ["image", "guest", "time", "date", "link"]
};
</script>

<style scoped lang="scss">
@import "./styles/_global.scss";

.ama-card {
  display: inline-block;
  max-width: 280px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  margin: 10px 0;
  text-decoration: none;
  color: #2c3e50;

  .image-container {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
  .body {
    padding: 10px;

    h4 {
      margin: 0 0 6px 0;
      padding: 0;
    }

    > div {
      padding: 10px 0;
      border-bottom: 1px solid #e0e0e0;
      margin-bottom: 5px;
      font-weight: 500;
    }
  }
  a {
    display: block;
    margin-top: 10px;
    font-weight: bold;
  }
}
</style>