import netlifyIdentity from "netlify-identity-widget";

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  initialize(callback) {
    window.netlifyIdentity = netlifyIdentity;
    netlifyIdentity.init();
    netlifyIdentity.on("init", (user) => {
      callback(user);
    });
  },
  authenticate(callback) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on("login", (user) => {
      this.user = user;
      callback(user);
      netlifyIdentity.close();
    });
  },
  signout(callback) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on("logout", () => {
      this.user = null;
      callback();
    });
  },
};

export default netlifyAuth;
