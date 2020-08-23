const { admin } = require('./prepare')

module.exports = admin
	.get('/index', (req, res) => {
		res.render('admin')
		// res.send('admin')

	})