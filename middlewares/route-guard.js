const requireLogin = (req, res, next) => {
    if (!req.session.currentUser) {
      res.redirect("/login");
      return;
    }
  
    next();// only if the user is logged in we can go to the loggedin.routes
    // as next!!!
  };
  console.log(requireLogin, "from route-guard")
  const requireToBeLoggedOut = (req, res, next) => {
    if (req.session.currentUser) {
      res.redirect("/profile");
      return;
    }
  
    next();
  };
  
  const objectWeWantToExport = {
    requireLogin,
    requireToBeLoggedOut,
  };
  
  module.exports = objectWeWantToExport;