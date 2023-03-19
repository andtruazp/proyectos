const express = require('express');
const router = express.Router();

const comenCtrl = require('../controllers/comentario.controller');

router.get('/:id',comenCtrl.getComentarios);
router.post('/:id/comentarios',comenCtrl.addComentario);
router.delete('/:id/comentarios/:comenId',comenCtrl.deleteComentario);

module.exports = router;