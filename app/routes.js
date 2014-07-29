var User = require('./models/usuario');

var session = require('express-session');

module.exports = function(app) {

	app.use(session({ secret: 'appsecret', saveUninitialized: true, resave: true }));

	app.route('/api/login')
	.get(function(req, res, next) {
		console.log("GET - /api/login");
	})
	.post(function(req, res, next) {
		console.log("POST - /api/login");
		console.log("req --- "+req);
  		console.log("Login -- Username "+req.body.username+ " Password "+ req.body.password);

		User.find({ username : req.body.username, password : req.body.password }, function(err, users) {
			if (err) {
				req.session.logged = false;
				res.send(err);
			}
			if (!users.length) {
				req.session.logged = false;
				console.log("nao encontrou usuario");
			} else {
				console.log("usuario encontrado ");
				users.forEach(function (user) {
					console.log(user.username);
				});
				req.session.logged = true;
			}
			res.json(users);
		});
	});

	app.route('/api/signup')
	.post(function(req, res, next) {
		console.log("POST - /api/signup");
		console.log("req --- "+req);

		console.log("Registration -- Username "+req.body.username+ " Password "+ req.body.password);

		var user = new User({
			username : req.body.username,
			password : req.body.password
		});

		user.save(function(err) {
			if (err)
				res.send(err);

			console.log("registration ok");
			res.send(user);
		});
	});


	app.get('*', function(req, res) {
	  // Use res.sendfile, as it streams instead of reading the file into memory.
	  res.sendfile('./public/index.html');
	});

}