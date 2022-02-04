const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller')

router.get('/users', UserController.index);
router.get('/users/:id', UserController.read);
router.post('/users', UserController.create);
router.put('/users/:id', UserController.edit);
router.delete('/users/:id', UserController.destroy);

module.exports = router;