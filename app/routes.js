var session = require('express-session');

module.exports = function(app) {

	app.use(session({ secret: 'appsecret', saveUninitialized: true, resave: true }));


	app.get('*', function(req, res) {
	  res.redirect('/#' + req.originalUrl);
	});

}