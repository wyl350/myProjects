const { admin } = require('./index')

module.exports = admin
	.get('/index', (req, res) => {
		res.render('admin')
	})