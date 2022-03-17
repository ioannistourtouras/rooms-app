const requireLoginRoom = (req, res, next) => {
    if (!req.session.currentUser) {
      res.redirect("/login");
      return;
    }
  
    next();
  };
  
  const requireToBeLoggedOutRoom = (req, res, next) => {
    if (req.session.currentUser) {
      res.redirect("/profile");
      return;
    }
  
    next();
  };
  
  const objectToExport = {
    requireLoginRoom,
    requireToBeLoggedOutRoom,
  };
  
  module.exports = objectToExport;