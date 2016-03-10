var user = require('../controllers/backUserCtrl');
var profile = require('../controllers/backProfileCtrl');

module.exports = function( app ){
  app.route('/api/login')
     .post(user.login);
  app.route('/api/profiles')
     .get(profile.loadProfile);
};
