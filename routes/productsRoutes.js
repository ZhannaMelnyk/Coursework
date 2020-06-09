const { Router } = require('express');
const { dbAdapter } = require('../config/dbConfig');

const router = Router();
const dbContext = dbAdapter.get('products');

router.get('/', function (req, res, next) {
	const result = dbContext.value();

	if (result) {
		res.send(result);
	} else {
		res.status(404);
		res.send('Page not found');
	}
})

router.get('/:id', function (req, res, next) {
	const result = dbContext.find(el => el.id == req.params.id).value();

	if (result) {
		res.send(result);
	} else {
		res.status(404);
		res.send('Page not found');
	}
})

module.exports = router;