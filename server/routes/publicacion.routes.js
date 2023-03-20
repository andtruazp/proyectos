const express = require('express');
const router = express.Router();

const publiCtrl = require('../controllers/publicacion.controller');

router.get('/',publiCtrl.getPublicacionesValidadas);
router.get('/sinvalidar',publiCtrl.getPublicacionesNoValidadas);

module.exports = router;