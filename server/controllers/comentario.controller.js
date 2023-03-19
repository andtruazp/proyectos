const Comentario = require('../models/comentario');
const comentarioCtrl = {};

comentarioCtrl.getComentarios = async (req, res) => {
    const comentarios = await Comentario.findById(req.params.id);
    res.json(comentarios);
};

comentarioCtrl.addComentario = async (req, res) => {
    const nuevoComentario = req.body; // Obtener el nuevo documento del cuerpo de la petición
    const publicacionId = req.params.id; // Obtener el ID del documento de los parámetros de la petición
    try{
        const comentario = await Comentario.findByIdAndUpdate(
            publicacionId,
            { $push: { comentarios: nuevoComentario } },
            { new: true }  
          );
          res.json(comentario);
    }catch (err) {
        console.error(err);
    res.status(500).json({ error: err.message });
      }
};

comentarioCtrl.deleteComentario = async (req, res) => {
    const comenId = req.params.comenId; 
    const publicacionId = req.params.id; 
    try{
        const comentario = await Comentario.findByIdAndUpdate(
            publicacionId,
            { $pull: { comentarios: { _id: comenId } } },
            { new: true }  
          );
          res.json(comentario);
    }catch (err) {
        console.error(err);
    res.status(500).json({ error: err.message });
      }
};

module.exports = comentarioCtrl; 