var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Integration of Auth0 using Node.JS (Express.js)",
  });
});

module.exports = router;
