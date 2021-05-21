const express = require('express');
const router = express.Router();

//------------ Importing Controllers ------------//
const authController = require('../controllers/authController')
const authControllerAdmin = require('../controllers/authControllerAdmin')

//------------ Login Route ------------//
//router.get('/login', (req, res) => res.render('login'));

router.get('/login', (req, res) => res.render('login_registar_user'));

//------------ Forgot Password Route ------------//
router.get('/forgot', (req, res) => res.render('forgot'));

router.get('/colegas', (req, res) => res.render('colegas'));

//------------ Reset Password Route ------------//
router.get('/reset/:id', (req, res) => {
    // console.log(id)
    res.render('reset', { id: req.params.id })
});

//------------ Register Route ------------//
//router.get('/register', (req, res) => res.render('register'));

router.get('/login_registar_user', (req, res) => res.render('login_registar_user'));

router.get('/registeradmin', (req, res) => res.render('colegas'));

router.get('/marcacao', (req, res) => res.render('welcome'));

//------------ Register POST Handle ------------//
//router.post('/register', authController.registerHandle);

router.post('/registeradmin', authControllerAdmin.registerAdminHandle);


router.post('/register', authController.registerHandle);

//------------ Email ACTIVATE Handle ------------//
router.get('/activate/:token', authController.activateHandle);

router.get('/activate2/:token', authControllerAdmin.activateAdminHandle);

//------------ Forgot Password Handle ------------//
router.post('/forgot', authController.forgotPassword);

//------------ Reset Password Handle ------------//
router.post('/reset/:id', authController.resetPassword);

//------------ Reset Password Handle ------------//
router.get('/forgot/:token', authController.gotoReset);

//------------ Login POST Handle ------------//
//router.post('/login', authController.loginHandle);
router.post('/login', authController.loginHandle);

//------------ Logout GET Handle ------------//
router.get('/logout', authController.logoutHandle);

module.exports = router;