const express = require('express');
const router = express.Router();
const { checkAuthenticate } = require('../middleware/auth.middleware')

router.use('/', require('./view.routes'))
router.use('/api', checkAuthenticate, require('./api.routes'))
router.use('/auth', require('./auth.routes'))


module.exports = router;