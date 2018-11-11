var router = require("express").Router();
var articleRoutes = require("./articles");

router.use("/articles", articleRoutes);
module.exports = router;
