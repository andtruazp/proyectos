const express = require('express');
const router = express.Router();

const publiCtrl = require('../controllers/publicacion.controller');

router.get('/',publiCtrl.getPublicaciones);

module.exports = router;