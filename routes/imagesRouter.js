const { Router } = require('express');
const express = require('express');

const router = Router();

router.use('/', express.static('images'));

module.exports = router;