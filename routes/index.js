var router = require("express").Router();
var apiRoutes = require("./api");
var path = require("path");

router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

module.exports = router;
