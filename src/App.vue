<template>
  <div id="app">
    <div class="main-header">
      <a class="lockup" href="/">
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.1 114.7"><path class="st0" d="M28.3 0H0v114.7h26.8c1.6 0 3.3-.1 5-.2l1.8-.2V93.5l-2.2.3c-1.2.1-2.3.2-3.4.2h-6.2V20.8H28c1.1 0 2.2.1 3.3.2l2.2.3V.3L31.6.2C30.5.1 29.4 0 28.3 0zM26 10.7l3.5-3.6v7.1L26 10.7zm-8.2 84.4-4.4 4.1V15.6l4.4 4.1v75.4zM4 108.1V6.7l5.4 5.1V103L4 108.1zM7 4h20l-4.6 4.6H11.9L7 4zm.1 106.7 4.6-4.4h10.8l4.4 4.4H7.1zm22.5-9.9v6.9l-3.4-3.4 3.4-3.5zM26.7 98l-4.2 4.4H16l4.7-4.4h6zm-6.2-81.2-4.4-4.1h6.2l4.1 4.1h-5.9zM76.7 58.8l1.4-1.4-1.4-1.4c-2.2-2.3-4.6-5.7-4.6-7V34.1c0-11.1-2.7-19.1-8.6-25C58.4 3.9 50.3.7 40.6.1L38.5 0v20.8l1.8.2c3.6.4 6.4 1.6 7.4 3 1.7 2.3 2.6 5.7 2.6 10.2V49c0 2.7 2.6 6.2 4.4 8.2-1.8 1.9-4.4 5.3-4.4 8.4v14.7c0 4.8-.9 8.4-2.7 10.5-1.1 1.3-3.9 2.4-7.3 2.8l-1.8.4v20.7l2.2-.2c9.5-.8 17.5-3.9 22.3-8.7 6-5.9 9.1-15 9.1-27.2 0-.1-.1-9.8 0-12.9 0-1.5 2.8-5.1 4.6-6.9zm-8.6-24.7V49c0 2 1.4 4.4 2.9 6.4h-3.8c-1.9-2.2-3.7-4.8-3.7-5.9 0-3-.5-16.5-.5-17 0-11.3-3.7-18.1-12.4-22.6l-4.9-5.1c6.3 1.1 11.5 3.6 14.9 7.1 5.2 5.2 7.5 12.1 7.5 22.2zM46.5 11.4l-4 3.4V7.2l4 4.2zM54.3 49V34.1c0-5.3-1.1-9.5-3.4-12.5-1.4-1.9-3.7-3-5.9-3.7l4.7-4c6.7 3.8 9.4 9.1 9.4 18.7 0 .1.5 14 .5 16.9 0 1.8 1.2 4 2.6 5.9h-3.6c-2.2-2.2-4.3-5.2-4.3-6.4zm-3.6 44.5c2.4-2.9 3.6-7.2 3.6-13.1V65.7c0-1.7 2.1-4.5 3.9-6.3h4.5c-1.5 2-3.1 4.6-3.2 6.7-.1 3.1-.5 15-.5 15.1 0 10.8-2.9 15.1-9.3 19.5l-4.8-3.9c2.1-.6 4.3-1.6 5.8-3.3zm-4.2 9.8-4 4.2V100l4 3.3zm21.6-24.6c0 11-2.6 19.2-7.9 24.3-3.3 3.2-8.2 5.5-14.3 6.7l4.6-5 .1.1c9.2-6 12.3-12 12.3-23.6 0-.5.5-12 .5-15.1 0-1.6 2.6-4.9 4.5-6.8h2.9c-1.4 1.9-2.8 4.3-2.8 6.2 0 3.3.1 12.8.1 13.2z"></path></svg><span>Denver Devs</span>
      </a>

      <ul class="nav">
        <li><a href="mailto:info@denverdevs.org">Contact</a></li>
      </ul>
    </div>
    <router-view/>
    <div class="footer">
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/_global.scss"; // this is not an ideal fix for sass vars, but it's what's working right now.

.main-header {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;

  @media screen and (min-width: 768px) {
    padding: 2em;
  }
}

.lockup {
  align-items: center;
  color: $white;
  display: flex;
  font-size: 1.2em;
  height: 30px;
  text-decoration: none;

  > svg {
    border-right: 2px solid rgba(255, 255, 255, 0.5);
    fill: $white;
    height: 100%;
    margin-right: 6px;
    padding-right: 6px;
  }
}

.nav {
  align-items: center;
  display: flex;
  font-size: 0.8em;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;

  a {
    border-bottom: 2px solid $venice-blue;
    color: $white;
    font-weight: bold;
    opacity: 0.7;
    padding: 0.2em 0;
    text-decoration: none;
  }
}
</style>
