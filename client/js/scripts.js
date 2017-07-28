/*=============================
  Primary Application Code
=============================*/

var Moon = require("moonjs");
var MoonRouter = require("moon-router");
require("./components/home.moon")(Moon);

Moon.use(MoonRouter);

var router = new MoonRouter({
  "default": "/",
  "map": {
    "/": "home"
  }
});

new Moon({
  el: "#app",
  router: router
});
