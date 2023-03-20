const Publicacion = require('../models/comentario');
const publiCtrl = {};

publiCtrl.getPublicacionesValidadas = async (req, res) =>{
    const publicaciones = await Publicacion.find({validado: true});
    res.json(publicaciones);
}

publiCtrl.getPublicacionesNoValidadas = async (req, res) =>{
    const publicaciones = await Publicacion.find({validado: false});
    res.json(publicaciones);
}

module.exports = publiCtrl; 