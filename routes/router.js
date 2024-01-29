const express = require('express');
const query = require('../controllers/query')
const router = express.router();

router.use('../controllers/query', query)
router.use('', )

router.route("/").get().post();