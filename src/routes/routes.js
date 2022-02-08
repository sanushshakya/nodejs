const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller')
const ITController = require('../controller/it.controller')
const AdminController = require('../controller/admin.controller')


router.get('/users', UserController.index);
router.post('/users', UserController.create);
router.get('/users/:ID', UserController.read);
router.put('/users/:ID', UserController.update);
router.delete('/users/:ID', UserController.destroy);

router.get('/it', ITController.index);
router.post('/it', ITController.create);
router.get('/it/:ID', ITController.read);

router.get('/admin', AdminController.index);
router.post('/admin', AdminController.create);
router.get('/admin/:ID', AdminController.read);


module.exports = router;