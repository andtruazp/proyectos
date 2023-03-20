const Publicacion = require('../models/comentario');
const publiCtrl = {};

publiCtrl.getPublicaciones = async (req, res) =>{
    const publicaciones = await Publicacion.find();
    res.json(publicaciones);
}

module.exports = publiCtrl; 