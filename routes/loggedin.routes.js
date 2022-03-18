const router = require("express").Router();
const { requireLogin } = require("../middlewares/route-guard"); // we
// are importing the route-guard!!! and we require it
// from that route

router.use(requireLogin); // all the routes from this router
// in loggedin will use this route-guard!!! All the routes
// are down here, that we want to access when/while logged in!!!
console.log(requireLogin, "from loggin-route");
const renderProfilePage = (req, res) => {
  res.render("profile", { user: req.session.currentUser });
};
router.get("/profile", renderProfilePage);

const renderDetailsPage = (req, res) => {
  console.log(req.myOwnCustomKey);
  res.send("this is another route we can only see when logged in");
};
router.get("/details", renderDetailsPage);

module.exports = router;
