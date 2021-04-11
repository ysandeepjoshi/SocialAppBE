const express = require('express');
const userControl = require('../controllers/user.controller');
const authCtrl = require('../controllers/auth.controller');
const router = express.Router();

router.route('/api/users')
    .get(userControl.list);
    
router.route('/api/users')
    .post(userControl.create);

router.route('/api/users/:userId')
    .get(authCtrl.requireSignin, userControl.read);
    
router.route('/api/users/:userId')
    .put(authCtrl.requireSignin, userControl.update);
    
router.route('/api/users/:userId')
    .delete(authCtrl.requireSignin, userControl.remove);

router.param('userId',userControl.userByID);

module.exports = router;
