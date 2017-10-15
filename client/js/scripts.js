/*=============================
  Primary Application Code
=============================*/

const Moon = require("moonjs");
const MoonRouter = require("moon-router");
require("./components/home.moon")(Moon);
require("./components/signup.moon")(Moon);

Moon.use(MoonRouter);

const router = new MoonRouter({
  "default": "/",
  "map": {
    "/": "home",
    "/signup": "signup"
  }
});

new Moon({
  el: "#app",
  router: router
});
