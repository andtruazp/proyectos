const Publicacion = require('../models/comentario');
const Categoria = require('../models/categoria')
const publiCtrl = {};

publiCtrl.getPublicacionesValidadas = async (req, res) =>{
    const publicaciones = await Publicacion.find({validado: true});
    res.json(publicaciones);
}

publiCtrl.getPublicacionesNoValidadas = async (req, res) =>{
    const publicaciones = await Publicacion.find({validado: false});
    res.json(publicaciones);
}

publiCtrl.getCategorias = async (req,res)=>{
    const categorias = await Categoria.find();
    res.json(categorias);
}

publiCtrl.getPorCategoria = async (req, res) =>{
    const publicaciones = await Publicacion.find({categoria: req.params.categoria, validado:true});
    res.json(publicaciones);
}

module.exports = publiCtrl; 